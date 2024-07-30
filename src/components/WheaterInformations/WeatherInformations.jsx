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
      {/* Renderiza a imagem somente se weatherIcon não for nulo */}
      {weatherIcon && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="Weather icon"
        />
      )}
      {/* Verifica se weather.main e weather.main.temp existem antes de acessar */}
      {weather.main && weather.main.temp !== undefined && (
        <p>A temperatura é {Math.round(weather.main.temp)}°C</p>
      )}
    </div>
  );
}

export default WeatherInformations;
