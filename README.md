# Previsão do Tempo - Aplicação React

## Descrição

Esta é uma aplicação simples de previsão do tempo desenvolvida em React. Ela permite ao usuário buscar informações meteorológicas de uma cidade específica utilizando a API do OpenWeatherMap.

## Funcionalidades

- Buscar informações meteorológicas de qualquer cidade.
- Exibir o nome da cidade, uma imagem representativa do clima atual e outras informações relevantes.

## Dependências

A aplicação utiliza as seguintes bibliotecas:

- [React](https://reactjs.org/) - Biblioteca principal para construção da interface.
- [Axios](https://axios-http.com/) - Biblioteca para realizar requisições HTTP.
- [OpenWeatherMap API](https://openweathermap.org/api) - API para obter os dados meteorológicos.

## Instalação

Siga os passos abaixo para instalar e rodar a aplicação localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   Certifique-se de ter o Node.js e o npm instalados. Então, execute:

   ```bash
   npm install
   ```

3. **Execute a aplicação:**

   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Utilização

1. Abra a aplicação no navegador.
2. Digite o nome da cidade no campo de texto.
3. Clique no botão "Buscar" para obter as informações meteorológicas.

## Estrutura do Código

### Componente App

O componente principal da aplicação. Ele gerencia o estado da aplicação e realiza a busca na API do OpenWeatherMap.

```javascript
import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "./components/WheaterInformations/WeatherInformations";

function App() {
  const [weather, setWeather] = useState({ weather: {} });
  const inputRef = useRef();

  async function ProcurarCidade() {
    const cidade = inputRef.current.value;
    const chave = "f4d1e55620c157eccbb0a5df711f2c98";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <div>
      <h1>API - Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="digite o nome da cidade" />
      <button onClick={ProcurarCidade}>Buscar</button>

      <WeatherInformations weather={weather} />
    </div>
  );
}

export default App;
```

### Componente WeatherInformations

Este componente é responsável por exibir as informações meteorológicas obtidas.

```javascript
/* eslint-disable react/prop-types */
function WeatherInformations({ weather }) {
  console.log(weather); // Verifica o conteúdo do objeto weather no console

  // Verifica se weather.weather e weather.weather[0] existem
  const weatherIcon = weather.weather && weather.weather[0] ? weather.weather[0].icon : null;

  return (
    <div>
      <h2>Meu Componente</h2>
      <p>O nome da cidade é {weather.name}</p>
      {/* Renderiza a imagem somente se weatherIcon não for nulo */}
      {weatherIcon && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="Weather icon"
        />
      )}
    </div>
  );
}

export default WeatherInformations;
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
