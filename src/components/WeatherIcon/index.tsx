import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  iconCode: string;
  size?: number;
}

export function WeatherIcon({ iconCode, size = 100 }: Props) {
  // Configuração padrão
  let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'weather-cloudy';
  let color = '#888'; // Cinza padrão

  // Mapeamento dos códigos do OpenWeatherMap para Ícones Coloridos
  switch (iconCode) {
    // === DIA ===
    case '01d': // Céu limpo (Dia)
      iconName = 'weather-sunny';
      color = '#FFD700'; // Amarelo Ouro
      break;
    case '02d': // Poucas nuvens (Dia)
      iconName = 'weather-partly-cloudy';
      color = '#FF8C00'; // Laranja suave
      break;
    case '03d': // Nuvens dispersas
    case '04d': // Nublado
      iconName = 'weather-cloudy';
      color = '#A9A9A9'; // Cinza
      break;
    case '09d': // Chuva moderada
      iconName = 'weather-pouring';
      color = '#00BFFF'; // Azul Claro
      break;
    case '10d': // Chuva
      iconName = 'weather-rainy';
      color = '#1E90FF'; // Azul Royal
      break;
    case '11d': // Trovoadas
      iconName = 'weather-lightning-rainy';
      color = '#8A2BE2'; // Roxo (BlueViolet)
      break;
    case '13d': // Neve
      iconName = 'weather-snowy';
      color = '#00CED1'; // Turquesa
      break;
    case '50d': // Neblina
      iconName = 'weather-fog';
      color = '#B0C4DE'; // Cinza Azulado
      break;

    // === NOITE ===
    case '01n': // Céu limpo (Noite)
      iconName = 'weather-night';
      color = '#191970'; // Azul Meia-noite
      break;
    case '02n': // Poucas nuvens (Noite)
      iconName = 'weather-night-partly-cloudy';
      color = '#483D8B'; // Roxo Escuro
      break;
    case '03n': 
    case '04n': 
      iconName = 'weather-cloudy';
      color = '#778899'; // Cinza Ardósia
      break;
    case '09n': 
    case '10n': 
      iconName = 'weather-rainy';
      color = '#1E90FF'; 
      break;
    case '11n': 
      iconName = 'weather-lightning';
      color = '#9370DB'; 
      break;
    
    // Fallback (caso venha algo estranho)
    default:
      iconName = 'weather-cloudy';
      color = '#888';
  }

  return (
    <MaterialCommunityIcons 
      name={iconName} 
      size={size} 
      color={color} 
      // Adicionamos uma sombra leve para dar efeito 3D
      style={{
        shadowColor: color,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5 // Para Android
      }}
    />
  );
}