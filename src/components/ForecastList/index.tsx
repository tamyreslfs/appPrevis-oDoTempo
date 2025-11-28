import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ForecastItem } from '../../types/weather';
import { WeatherIcon } from '../WeatherIcon';
import { styles } from './styles'; // <--- IMPORTAÇÃO

interface Props {
  data: ForecastItem[];
}

export function ForecastList({ data }: Props) {
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const groupForecastByDay = (list: ForecastItem[]) => {
    const grouped: { [key: string]: ForecastItem[] } = {};
    list.forEach((item) => {
      const dateObj = new Date(item.dt_txt);
      const dateKey = dateObj.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit' });
      const capitalizedKey = dateKey.charAt(0).toUpperCase() + dateKey.slice(1);

      if (!grouped[capitalizedKey]) grouped[capitalizedKey] = [];
      grouped[capitalizedKey].push(item);
    });
    return grouped;
  };

  const renderItem = ({ item }: { item: ForecastItem }) => (
    <View style={styles.card}>
      <Text style={styles.time}>{formatTime(item.dt_txt)}</Text>
      <WeatherIcon iconCode={item.weather[0].icon} size={40} />
      <Text style={styles.temp}>{Math.round(item.main.temp)}°C</Text>
      <Text style={styles.rain}>☔ {Math.round(item.pop * 100)}%</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Previsão para os próximos 5 dias</Text>
      
      {Object.entries(groupForecastByDay(data))
        .slice(0, 5)
        .map(([day, items]) => (
          <View key={day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day}</Text>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.dt.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 10 }}
            />
          </View>
      ))}
    </View>
  );
}