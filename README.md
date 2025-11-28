# 🌦️ Clima Agora BR

Projeto desenvolvido para a disciplina de **Laboratório de Desenvolvimento de Aplicativos Nativos**.

O objetivo deste aplicativo é fornecer a previsão do tempo em tempo real e a previsão para os próximos 5 dias de qualquer cidade do Brasil, utilizando consumo de API REST e recursos nativos.

---

## 📱 Funcionalidades (Core Features)

* **Busca Intuitiva:** Seleção de Estado (UF) e campo de texto para digitar a cidade.
* **Dados em Tempo Real:**
    * Temperatura atual e Sensação Térmica.
    * Descrição do clima (ex: "Céu limpo", "Chuva moderada").
    * Umidade relativa do ar.
* **Previsão Futura:** Lista com rolagem horizontal mostrando a previsão a cada 3 horas para os próximos 5 dias.
* **Interface Dinâmica:**
    * O fundo do aplicativo muda de cor (Degradê) automaticamente conforme o clima (Azul para dia limpo, Cinza para chuva, Roxo para noite, etc.).
    * Ícones do clima coloridos e personalizados.
* **Performance:** Otimizado para não travar, eliminando carregamentos excessivos de listas gigantes.

---

## 🛠️ Tecnologias Utilizadas

* **React Native** (Framework principal)
* **Expo** (Plataforma de desenvolvimento)
* **TypeScript** (Para tipagem segura e código limpo)
* **OpenWeatherMap API** (Fonte de dados meteorológicos)
* **Expo Linear Gradient** (Para fundos dinâmicos)

---

## 🚀 Como rodar o projeto

Siga os passos abaixo para executar o aplicativo no seu computador e celular.

### 1. Pré-requisitos

Certifique-se de ter instalado no seu computador:
* **Node.js** (Versão LTS recomendada).
* **VS Code** (Editor de código).
* **Git** (Para clonar o repositório).
* **App Expo Go** instalado no seu celular (Android ou iOS).

### 2. Instalação

Abra o terminal do VS Code e siga os comandos:

```bash
# 1. Clone este repositório
git clone [https://github.com/tamyreslfs/appPrevis-oDoTempo.git]

# 2. Entre na pasta do projeto
cd SkyCast

# 3. Instale as dependências
npm install
```

### 3. Configuração da API Key (Importante!)

Este projeto utiliza variáveis de ambiente para segurança. Você precisa criar um arquivo para armazenar sua chave da OpenWeatherMap.

# 1.Crie um arquivo chamado .env na raiz do projeto (mesmo local do package.json).

# 2.Adicione a seguinte linha dentro dele:

```bash
EXPO_PUBLIC_WEATHER_API_KEY=sua_chave_da_api_aqui
```

(Substitua sua_chave_da_api_aqui pela sua chave gratuita obtida no site https://openweathermap.org/)

### 4. Executando o App

No terminal, rode:

```bash
npx expo start --clear
```

###### 1.Um QR Code aparecerá no terminal.

###### 2.Abra o app Expo Go no seu celular.

###### 3.Escaneie o QR Code.

###### 4.Pronto! O app carregará no seu dispositivo.

##📂 Estrutura do Projeto

O código foi organizado seguindo padrões de arquitetura limpa para facilitar a manutenção:

src/
├── components/      # Componentes visuais reutilizáveis (Card, Listas, Inputs)
├── hooks/           # Lógica de estado e regras de negócio (Custom Hooks)
├── screens/         # Telas da aplicação (Home)
├── services/        # Configuração de chamadas API (fetch)
├── types/           # Definições de tipagem TypeScript (Interfaces)
└── utils/           # Funções auxiliares (Mapeador de cores/ícones)

##📱 Video demostrativo

Tela Inicial,Busca de Cidade,Previsão


##✒️ Autor

Desenvolvido por Tamyres Lopes para o curso de Engenharia de software.
