import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    paddingBottom: 20 
  },
  
  // Título Principal ("Previsão para os próximos 5 dias")
  mainTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 20, 
    marginBottom: 15, 
    color: '#FFFFFF', // <--- MUDANÇA: Cor Branca
    // Adicionamos sombra para garantir leitura em fundos claros (céu azul dia)
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  dayContainer: { 
    marginBottom: 20 
  },

  // Título do Dia ("Quinta-feira", "Sexta-feira")
  dayTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#FFFFFF', // <--- MUDANÇA: Cor Branca
    marginLeft: 20, 
    marginBottom: 8,
    // Sombra também aqui
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  // Os cards continuam com fundo branco, então a letra dentro deles DEVE ser escura
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // <--- Dica extra: Leve transparência no fundo branco fica chique
    padding: 10, 
    borderRadius: 12, 
    alignItems: 'center',
    marginRight: 10, 
    elevation: 2, 
    width: 90, 
    height: 130,
    justifyContent: 'space-between', 
    borderWidth: 0, // Removi a borda cinza para ficar mais moderno
  },
  
  time: { 
    fontWeight: 'bold', 
    color: '#333', // Mantém escuro pois o fundo do card é branco
    fontSize: 12 
  },
  temp: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  rain: { 
    fontSize: 11, 
    color: '#007AFF', 
    fontWeight: '600' 
  }
});