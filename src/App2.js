import React from 'react';
import { useFetchLocation } from './hooks/useFetchLocation';
// import { useEffect } from 'react';
import { useFetchWeather } from './hooks/useFetchWeather';

export const App = React.memo(() => {

  const { data, loading } = useFetchLocation();
  const { ip, country_name, state_prov } = data;

  const { weather } = useFetchWeather(state_prov, "metric", "es");

  console.log("DATA LOCATION : ", data);
  console.log("LOADING : ", loading);
  console.log("WEATHER : ", weather);



  return (
    <>
      <div>
        HOLA, mi direccion IP es : <span>{ip}</span>, mi pais es : <span>{country_name}</span> y mi provincia es : <span>{state_prov}</span>
      </div>

      <div>
        {weather.length !== 0 && <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />}
        {/* <img src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="" /> */}
      </div>

      <div>
        <pre>{JSON.stringify(weather, null, 3)}</pre>
      </div>
    </>
  )
})