import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useWeather } from '../../hooks/useWeather';
import { CityPicker } from '../../components/CityPicker';
import { WeatherCard } from '../../components/WeatherCard';
import { ForecastList } from '../../components/ForecastList';
import { getBackgroundColors } from '../../utils/weatherBackgroundMapper';
import { styles } from './styles'; // <--- Agora estamos usando o arquivo externo correto

export default function Home() {
  const { 
    weather, forecast, ufs, 
    selectedUf, setSelectedUf, 
    selectedCity, setSelectedCity, 
    loadingWeather, handleSearch 
  } = useWeather();

  // Pega as cores do degradê
  const backgroundColors = getBackgroundColors(weather?.weather[0].icon);

  return (
    <LinearGradient 
      colors={backgroundColors as any} 
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Agora 'styles.content' existe no arquivo importado */}
      <View style={styles.content}>
        <Text style={styles.title}>Clima Agora BR</Text>

        <CityPicker 
          ufs={ufs}
          selectedUf={selectedUf}
          selectedCity={selectedCity}
          onSelectUf={setSelectedUf}
          onSelectCity={setSelectedCity}
          onSearch={handleSearch}
          loadingWeather={loadingWeather}
        />

        {weather && (
          <ScrollView style={styles.resultContainer} showsVerticalScrollIndicator={false}>
            <WeatherCard data={weather} uf={selectedUf} />
            {forecast.length > 0 && <ForecastList data={forecast} />}
          </ScrollView>
        )}
      </View>
    </LinearGradient>
  );
}

// REMOVIDO: const styles = StyleSheet.create(...) 
// Não precisamos mais dele aqui embaixo pois importamos lá em cima.