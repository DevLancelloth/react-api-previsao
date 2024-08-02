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
    weather.weather && weather.weather[0] ? weather.weather[0].description : "";
  // Valores padrão para exibição inicial
  const cityName = weather.name || "Cidade";
  const temperature =
    weather.main && weather.main.temp !== undefined
      ? Math.round(weather.main.temp)
      : "";
  const feelsLike =
    weather.main && weather.main.feels_like !== undefined
      ? Math.round(weather.main.feels_like)
      : "";
  const humidity =
    weather.main && weather.main.humidity !== undefined
      ? weather.main.humidity
      : "";
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

WeatherInformations.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInformations;
