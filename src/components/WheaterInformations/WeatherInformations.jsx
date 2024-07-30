/* eslint-disable react/prop-types */
function WeatherInformations({ weather }) {
  console.log(weather); // Verifica o conteúdo do objeto weather no console

  // Verifica se weather.weather e weather.weather[0] existem
  const weatherIcon =
    weather.weather && weather.weather[0] ? weather.weather[0].icon : null;

  return (
    <div>
      <h2>Meu Componente</h2>
      <p>O nome da cidade é {weather.name}</p>
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
