import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string, uf: string): Promise<WeatherData | null> => {
  if (!API_KEY) return null;
  try {
    const query = encodeURIComponent(`${city},${uf},BR`);
    const response = await fetch(
      `${WEATHER_BASE_URL}/weather?q=${query}&units=metric&lang=pt_br&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('Erro na busca');
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return null;
  }
};

export const getForecast = async (city: string, uf: string): Promise<ForecastData | null> => {
  if (!API_KEY) return null;
  try {
    const query = encodeURIComponent(`${city},${uf},BR`);
    const response = await fetch(
      `${WEATHER_BASE_URL}/forecast?q=${query}&units=metric&lang=pt_br&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('Erro na busca da previsão');
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar previsão:", error);
    return null;
  }
};