import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Importante: NÃO colocar backgroundColor aqui, senão cobre o degradê
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60, // Espaço para barra de status
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF', // Texto Branco (fundamental para o degradê)
    textAlign: 'center',
    // Sombra para garantir leitura
    textShadowColor: 'rgba(0,0,0,0.2)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  resultContainer: {
    width: '100%',
  }
});