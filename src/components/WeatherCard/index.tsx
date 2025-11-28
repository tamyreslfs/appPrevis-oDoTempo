import React from 'react';
import { View, Text } from 'react-native';
import { WeatherData } from '../../types/weather';
import { WeatherIcon } from '../WeatherIcon';
import { styles } from './styles'; // <--- IMPORTAÇÃO

interface Props {
  data: WeatherData;
  uf: string;
}

export function WeatherCard({ data, uf }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{data.name} - {uf}</Text>
      
      <View style={styles.iconContainer}>
        <WeatherIcon iconCode={data.weather[0].icon} size={120} />
      </View>

      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>
      <Text style={styles.feelsLike}>Sensação de {Math.round(data.main.feels_like)}°C</Text>
      <Text style={styles.description}>{data.weather[0].description.toUpperCase()}</Text>
    </View>
  );
}