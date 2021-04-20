import React, { useReducer, useEffect } from 'react';
import { PrincipalReducer } from './PrincipalReducer';
import PrincipalContext from './PrincipalContext';
import { types } from '../types/types';

import { getMyLocation } from '../helpers/getMyLocation';
import { getWeatherByLocation, getWeatherForecastByLocation } from '../helpers/getWeather';

export const PrincipalState = (props) => {

    const [state, dispatch] = useReducer(PrincipalReducer, {
        options: {
            idLanguage: 'en',
            metric: 'standard',
            metricSymbol: 'K'
        },
        myLocation: null,
        myLocationWeather: null,
        myLocationWeatherForecast: null,
        loading: true
    });

    const setOptions = (objeto) => {
        let data = {
            idLanguage: objeto.idLang,
            metric: objeto.metrica,
            metricSymbol: objeto.simbolo
        }
        dispatch({
            type: types.options,
            data: {
                options: data
            }
        })
    }

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

    const getCurrentWeatherByLocation = (location) => {
        // console.log("getCurrentWeatherByLocation ejecutado");
        getWeatherByLocation(location, state.options.metric, state.options.idLanguage).then(data => {
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

    const getCurrentWeatherForecastByLocation = (lat, lon) => {
        // console.log("getWeatherForecastByLocation ejecutado");
        getWeatherForecastByLocation(lat, lon, state.options.metric, state.options.idLanguage).then(data => {
            // console.log("DATA WEATHER FORECAST BY LOCATION : ", data);
            if (data) {
                const newDaily = data.daily.filter((value, index) => {
                    return index > 0 && index < data.daily.length - 1;
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
    }, [state.options])

    useEffect(() => {
        if (state.myLocation !== null) {
            getCurrentWeatherByLocation(state.myLocation.stateProv, state.options.metric, state.options.idLanguage);
        }
    }, [state.myLocation, state.options])

    useEffect(() => {
        if (state.myLocationWeather !== null) {
            getCurrentWeatherForecastByLocation(state.myLocationWeather.latitude, state.myLocationWeather.longitude, state.options.metric, state.options.idLanguage);
        }
    }, [state.myLocationWeather])


    return (
        <PrincipalContext.Provider value={{
            options: state.options,
            myLocation: state.myLocation,
            myLocationWeather: state.myLocationWeather,
            myLocationWeatherForecast: state.myLocationWeatherForecast,
            loading: state.loading,
            getCurrentWeatherForecastByLocation,
            setOptions
        }}>
            {props.children}
        </PrincipalContext.Provider>
    )
}
