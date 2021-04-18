import React, { useReducer, useEffect } from 'react';
import { PrincipalReducer } from './PrincipalReducer';
import PrincipalContext from './PrincipalContext';
import { types } from '../types/types';

import { getMyLocation } from '../helpers/getMyLocation';
import { getWeatherByLocation, getWeatherForecastByLocation } from '../helpers/getWeather';

export const PrincipalState = (props) => {

    const [state, dispatch] = useReducer(PrincipalReducer, {
        myLocation: null,
        myLocationWeather: null,
        myLocationWeatherForecast: null,
        loading: true
    });

    const getCurrentLocation = () => {
        // console.log("getCurrentLocation ejecutado");
        getMyLocation().then(data => {
            // console.log("DATA : ", data);
            if (!data.message) {
                // console.log("dentro de data", data);
                dispatch({
                    type: types.myLocation,
                    data: {
                        myLocation: {
                            ip: data.ip,
                            country: data.country_name,
                            stateProv: data.state_prov,
                            countryFlag: data.country_flag,
                            currentTime: data.time_zone.current_time_unix
                        }
                    }
                })
            } else {
                console.log("getCurrentLocation error : ", data);
            }
        });
    }

    const getCurrentWeatherByLocation = (location, units = "standard", lang = "us") => {
        // console.log("getCurrentWeatherByLocation ejecutado");
        getWeatherByLocation(location, units, lang).then(data => {
            // console.log("DATA WEATHER BY LOCATION : ", data);
            if (data) {
                // console.log("aea");
                dispatch({
                    type: types.myLocationWeather,
                    data: {
                        myLocationWeather: {
                            longitude: data.coord.lon,
                            latitude: data.coord.lat,
                            temp: data.main.temp,
                            tempMin: data.main.temp_min,
                            tempMax: data.main.temp_max,
                            feelsLike: data.main.feels_like,
                            pressure: data.main.pressure,
                            icon: data.weather[0].icon,
                            description: data.weather[0].description,
                            percentage: [
                                {
                                    title: 'Humidity',
                                    value: data.main.humidity
                                },
                                {
                                    title: 'Clouds',
                                    value: data.clouds.all
                                }
                            ]
                        }
                    }
                })
            }
        })
    }

    const getCurrentWeatherForecastByLocation = (lat, lon, units = "standard", lang = "us") => {
        console.log("getWeatherForecastByLocation ejecutado");
        getWeatherForecastByLocation(lat, lon, units, lang).then(data => {
            console.log("DATA WEATHER FORECAST BY LOCATION : ", data);
            if (data) {
                const newDaily = data.daily.filter((value, index) => {
                    if (index > 0 && index < data.daily.length - 1) {
                        return value;
                    }
                })
                dispatch({
                    type: types.myLocationWeatherForecast,
                    data: {
                        myLocationWeatherForecast: newDaily
                    }
                })
            }
        })
    }

    useEffect(() => {
        getCurrentLocation();
    }, [])

    useEffect(() => {
        if (state.myLocation !== null) {
            getCurrentWeatherByLocation(state.myLocation.stateProv, "metric", "es");
        }
    }, [state.myLocation])

    return (
        <PrincipalContext.Provider value={{
            myLocation: state.myLocation,
            myLocationWeather: state.myLocationWeather,
            myLocationWeatherForecast: state.myLocationWeatherForecast,
            loading: state.loading,
            getCurrentWeatherForecastByLocation
        }}>
            {props.children}
        </PrincipalContext.Provider>
    )
}
