import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
    marginBottom: 30,
  },
  cityName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  iconContainer: { 
    marginVertical: 10 
  },
  temp: { 
    fontSize: 64, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  feelsLike: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 5 
  },
  description: { 
    fontSize: 18, 
    color: '#333', 
    marginBottom: 10 
  },
});