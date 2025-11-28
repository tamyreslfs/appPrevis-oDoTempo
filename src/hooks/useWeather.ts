import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { getWeather, getForecast } from '../services/api';
import { WeatherData, ForecastItem, IBGEUF } from '../types/weather';

// LISTA FIXA DE ESTADOS (Não quebra nunca!)
const BRAZIL_STATES: IBGEUF[] = [
  { id: 12, sigla: 'AC', nome: 'Acre' },
  { id: 27, sigla: 'AL', nome: 'Alagoas' },
  { id: 16, sigla: 'AP', nome: 'Amapá' },
  { id: 13, sigla: 'AM', nome: 'Amazonas' },
  { id: 29, sigla: 'BA', nome: 'Bahia' },
  { id: 23, sigla: 'CE', nome: 'Ceará' },
  { id: 53, sigla: 'DF', nome: 'Distrito Federal' },
  { id: 32, sigla: 'ES', nome: 'Espírito Santo' },
  { id: 52, sigla: 'GO', nome: 'Goiás' },
  { id: 21, sigla: 'MA', nome: 'Maranhão' },
  { id: 51, sigla: 'MT', nome: 'Mato Grosso' },
  { id: 50, sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { id: 31, sigla: 'MG', nome: 'Minas Gerais' },
  { id: 15, sigla: 'PA', nome: 'Pará' },
  { id: 25, sigla: 'PB', nome: 'Paraíba' },
  { id: 41, sigla: 'PR', nome: 'Paraná' },
  { id: 26, sigla: 'PE', nome: 'Pernambuco' },
  { id: 22, sigla: 'PI', nome: 'Piauí' },
  { id: 33, sigla: 'RJ', nome: 'Rio de Janeiro' },
  { id: 24, sigla: 'RN', nome: 'Rio Grande do Norte' },
  { id: 43, sigla: 'RS', nome: 'Rio Grande do Sul' },
  { id: 11, sigla: 'RO', nome: 'Rondônia' },
  { id: 14, sigla: 'RR', nome: 'Roraima' },
  { id: 42, sigla: 'SC', nome: 'Santa Catarina' },
  { id: 35, sigla: 'SP', nome: 'São Paulo' },
  { id: 28, sigla: 'SE', nome: 'Sergipe' },
  { id: 17, sigla: 'TO', nome: 'Tocantins' }
];

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  
  // Usamos a constante fixa agora
  const [ufs] = useState<IBGEUF[]>(BRAZIL_STATES);

  const [selectedUf, setSelectedUf] = useState<string>('SP'); // Já começa com SP selecionado
  const [selectedCity, setSelectedCity] = useState<string>(''); 
  
  const [loadingWeather, setLoadingWeather] = useState(false);

  const handleSearch = async () => {
    if (!selectedCity || !selectedUf) {
      Alert.alert("Atenção", "Digite o nome da cidade.");
      return;
    }

    Keyboard.dismiss(); // Esconde o teclado
    setLoadingWeather(true);
    setWeather(null);
    setForecast([]);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        getWeather(selectedCity, selectedUf),
        getForecast(selectedCity, selectedUf)
      ]);

      if (weatherRes && forecastRes) {
        setWeather(weatherRes);
        setForecast(forecastRes.list);
      } else {
        Alert.alert("Ops!", "Cidade não encontrada. Tente corrigir o nome.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na conexão.");
    } finally {
      setLoadingWeather(false);
    }
  };

  return {
    weather,
    forecast,
    ufs,
    selectedUf,
    setSelectedUf,
    selectedCity,
    setSelectedCity,
    loadingWeather,
    handleSearch
  };
};