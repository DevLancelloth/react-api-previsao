/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  let dailyForecasts = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
    });
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = forecast;
    }
  }

  const forecasts = Object.keys(dailyForecasts)
    .slice(0, 5)
    .map((date) => {
      const forecast = dailyForecasts[date];
      return (
        <div key={date} className="forecast-card">
          <p>{date}</p>
          <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt="Weather icon"
          />
          <p>{forecast.weather[0].description}</p>
          <p>
            {Math.round(forecast.main.temp_min)}°C min /{" "}
            {Math.round(forecast.main.temp_max)}°C max
          </p>
        </div>
      );
    });

  return (
    <div className="weather-informations-5-days">
      <h2>Previsão para os próximos 5 dias</h2>
      <div className="forecast-cards">{forecasts}</div>
    </div>
  );
}

export default WeatherInformations5Days;
