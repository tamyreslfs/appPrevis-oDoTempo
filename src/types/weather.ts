// src/types/weather.ts

// Define o formato da resposta que queremos usar no App
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number; // <--- NOVO CAMPO
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  pop: number;
  dt_txt: string;
}

export interface ForecastData {
  list: ForecastItem[];
}

export interface IBGEUF {
  id: number;
  sigla: string;
  nome: string;
}

export interface IBGECity {
  id: number;
  nome: string;
}