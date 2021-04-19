import { API_KEY_OPENWEATHERMAP } from "../apiKeys";
import { URL_GET_WEATHER } from "../environments/environments";


export const getWeatherByLocation = async (location, units, lang) => {
    const resp = await fetch(`${URL_GET_WEATHER}/weather?q=${location}&units=${units}&lang=${lang}&appid=${API_KEY_OPENWEATHERMAP}`);
    const data = await resp.json();

    return data;
}

export const getWeatherForecastByLocation = async (lat, lon, units, lang) => {
    const resp = await fetch(`${URL_GET_WEATHER}/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY_OPENWEATHERMAP}`);
    const data = await resp.json();

    return data;
}
