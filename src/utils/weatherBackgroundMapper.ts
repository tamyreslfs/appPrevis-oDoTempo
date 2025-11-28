// Cores para o degradê [Cor de Cima, Cor de Baixo]
const gradients: { [key: string]: string[] } = {
    // === DIA ===
    '01d': ['#29B6F6', '#00B0FF'], // Céu azul limpo (Ensolarado)
    '02d': ['#4FC3F7', '#81D4FA'], // Poucas nuvens (Azul claro)
    '03d': ['#90A4AE', '#B0BEC5'], // Nuvens dispersas (Cinza azulado)
    '04d': ['#546E7A', '#78909C'], // Nublado (Cinza fechado)
    '09d': ['#455A64', '#607D8B'], // Chuva (Cinza chumbo)
    '10d': ['#0288D1', '#4FC3F7'], // Chuva com sol (Azul chuva)
    '11d': ['#263238', '#37474F'], // Tempestade (Quase preto)
    '13d': ['#B3E5FC', '#E1F5FE'], // Neve (Branco gelo)
    '50d': ['#CFD8DC', '#ECEFF1'], // Neblina
  
    // === NOITE ===
    '01n': ['#0D47A1', '#1565C0'], // Azul profundo (Noite limpa)
    '02n': ['#1A237E', '#283593'], // Noite com nuvens (Roxo azulado)
    '03n': ['#263238', '#37474F'], // Nublado noite
    '04n': ['#212121', '#424242'], // Nublado fechado noite
    '09n': ['#000000', '#263238'], // Chuva noite
    '10n': ['#000000', '#1A237E'], // Chuva noite
    '11n': ['#000000', '#212121'], // Tempestade noite
  
    // Padrão (Azul Sky)
    'default': ['#29B6F6', '#00B0FF'],
  };
  
  export const getBackgroundColors = (iconCode: string | undefined): string[] => {
    if (!iconCode || !gradients[iconCode]) {
      return gradients['default'];
    }
    return gradients[iconCode];
  };