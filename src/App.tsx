import { useEffect, useState } from "react";
import { getWeatherData } from "./api/api_request";
import Header from "./components/Header";
import NextDaysWeather from "./components/NextDaysWeather";
import TodayWeather from "./components/TodayWeather";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [weatherData, setWeather]: any = useState(null);
  useEffect(() => {
    getWeatherData().then((data) => {
      if (!data) {
        return null;
      }
      setWeather(data);
    });
  }, []);

  function searchWeatherbyCity(city: string) {
    getWeatherData(city).then((data) => {
      if (data.error) {
        alert(data.error.message);
        return null;
      }
      setWeather(data);
      console.log(data);
    });
  }

  if (!weatherData) {
    return <LoadingSpinner />;
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
