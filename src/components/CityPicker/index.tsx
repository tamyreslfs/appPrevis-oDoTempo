import React, { memo } from 'react';
import { 
  View, Text, TouchableOpacity, ActivityIndicator, TextInput 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { IBGEUF } from '../../types/weather';
import { styles } from './styles'; // <--- IMPORTAÇÃO AQUI

interface Props {
  ufs: IBGEUF[];
  selectedUf: string;
  selectedCity: string;
  onSelectUf: (uf: string) => void;
  onSelectCity: (text: string) => void;
  onSearch: () => void;
  loadingWeather: boolean;
}

function CityPickerComponent({
  ufs, selectedUf, selectedCity, 
  onSelectUf, onSelectCity, onSearch, 
  loadingWeather
}: Props) {
  return (
    <View style={styles.formContainer}>
      
      <Text style={styles.label}>Estado:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedUf}
          onValueChange={onSelectUf}
        >
          {ufs.map(uf => (
            <Picker.Item key={uf.id} label={`${uf.nome} (${uf.sigla})`} value={uf.sigla} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Cidade:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome (ex: Campinas)"
          value={selectedCity}
          onChangeText={onSelectCity}
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity 
        style={[styles.button, (!selectedCity || loadingWeather) && styles.buttonDisabled]} 
        onPress={onSearch}
        disabled={!selectedCity || loadingWeather}
      >
        {loadingWeather ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>BUSCAR CLIMA</Text>
        )}
      </TouchableOpacity>

    </View>
  );
}

export const CityPicker = memo(CityPickerComponent);