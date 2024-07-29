/* eslint-disable react/prop-types */
function WeatherInformations({ weather }) {
  console.log(weather);
  return (
    <div>
      <h2>Meu Componente</h2>
      <p>O nome da cidade é {weather.name}</p>
    </div>
  );
}

export default WeatherInformations;
