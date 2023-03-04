import { useEffect, useState } from 'react';
import { getWeatherData } from './api/api_request';
import Header from './components/Header';
import NextDaysWeather from './components/NextDaysWeather';
import TodayWeather from './components/TodayWeather';

function App() {
  const [weatherData, setWeather]: any = useState(null);
  useEffect(() => {
    getWeatherData().then((data) => {
      setWeather(data);
    });
  }, []);

  function searchWeatherbyCity(city: string) {
    getWeatherData(city).then((data) => {
      setWeather(data);
      console.log(data);
    });
  }

  if (!weatherData) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header {...weatherData.location} onWeatherSearch={searchWeatherbyCity} />
      <TodayWeather {...weatherData.forecast.forecastday[0].hour} />
      <NextDaysWeather {...weatherData.forecast.forecastday} />
    </>
  );
}

export default App;
