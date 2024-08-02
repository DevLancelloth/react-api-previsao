/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./WeatherInformations.css";

// Componente funcional para exibir informações meteorológicas
function WeatherInformations({ weather }) {
  console.log(weather);

  // Obtém o ícone do clima, se disponível, caso contrário, usa um ícone padrão
  const weatherIcon =
    weather.weather && weather.weather[0] ? weather.weather[0].icon : "01d";

  // Obtém a descrição do clima, se disponível
  const weatherDescription =
    weather.weather && weather.weather[0] ? weather.weather[0].description : "";

  // Obtém o nome da cidade, se disponível, caso contrário, usa "Cidade"
  const cityName = weather.name || "Cidade";

  // Obtém a temperatura, se disponível, e arredonda o valor
  const temperature =
    weather.main && weather.main.temp !== undefined
      ? Math.round(weather.main.temp)
      : "";

  // Obtém a sensação térmica, se disponível, e arredonda o valor
  const feelsLike =
    weather.main && weather.main.feels_like !== undefined
      ? Math.round(weather.main.feels_like)
      : "";

  // Obtém a umidade, se disponível
  const humidity =
    weather.main && weather.main.humidity !== undefined
      ? weather.main.humidity
      : "";

  // Obtém a pressão, se disponível
  const pressure =
    weather.main && weather.main.pressure !== undefined
      ? weather.main.pressure
      : "";

  return (
    <div className="weather-container">
      <h2>{cityName}</h2>
      <div className="weather-info">
        <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} />
        <p className="temperature">{temperature}°C</p>
      </div>
      <p className="description">{weatherDescription}</p>
      <div className="details">
        <p>Sensação térmica: {feelsLike}°C</p>
        <p>Umidade: {humidity}%</p>
        <p>Pressão: {pressure} hPa</p>
      </div>
    </div>
  );
}

// Define os tipos de propriedades esperadas pelo componente
WeatherInformations.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInformations;
