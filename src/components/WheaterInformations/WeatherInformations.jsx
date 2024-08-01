/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  console.log(weather); // Verifica o conteúdo do objeto weather no console

  // Obtém a imagem do clima baseado no código do ícone
  const weatherIcon =
    weather.weather && weather.weather[0] ? weather.weather[0].icon : "01d";
  // Obtém a descrição do clima baseado no código do ícone
  const weatherDescription =
    weather.weather && weather.weather[0]
      ? weather.weather[0].description
      : "N/A";
  // Valores padrão para exibição inicial
  const cityName = weather.name || "Cidade";
  const temperature =
    weather.main && weather.main.temp !== undefined
      ? Math.round(weather.main.temp)
      : "N/A";
  const feelsLike =
    weather.main && weather.main.feels_like !== undefined
      ? Math.round(weather.main.feels_like)
      : "N/A";
  const humidity =
    weather.main && weather.main.humidity !== undefined
      ? weather.main.humidity
      : "N/A";
  const pressure =
    weather.main && weather.main.pressure !== undefined
      ? weather.main.pressure
      : "N/A";

  return (
    <div className="weather-container">
      <div>
        <h2>Meu Componente</h2>
        <p>O nome da cidade é {cityName}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="Weather icon"
        />
        <p className="temperature">A temperatura é {temperature}°C</p>
      </div>
      <p>Descrição do clima: {weatherDescription}</p>
      <div>
        <p>Sensação Térmica: {feelsLike}°C</p>
        <p>Umidade: {humidity}%</p>
        <p>Pressão Atmosférica: {pressure} hPa</p>
      </div>
    </div>
  );
}

WeatherInformations.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInformations;
