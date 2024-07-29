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
      <h1>DevClub - Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="digite o nome da cidade" />
      <button onClick={ProcurarCidade}>Buscar</button>

      <WeatherInformations weather={weather} />
    </div>
  );
}

export default App;
