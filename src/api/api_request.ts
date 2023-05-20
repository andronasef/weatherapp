import "../data/consts";
import { WEATHER_APIKEY, WEATHER_URL } from "../data/consts";
import { getCurrentLocation } from "../lib/utils/location";

export async function requestWeatherUrl(city?: string) {
  let url = `${WEATHER_URL}/forecast.json?key=${WEATHER_APIKEY}&aqi=no&days=7`;

  if (city) {
    url += `&q=${city}`;
  } else {
    let locationData: any = await getCurrentLocation();
    const locationQuery = `&q=${locationData.latitude},${locationData.longitude}`;

    url += locationQuery;
  }

  console.log(url);

  return url;
}

export async function getWeatherData(city?: string) {
  try {
    const response = await fetch(await requestWeatherUrl(city));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
