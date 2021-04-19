import React, { useContext } from 'react';
import { HomePrincipalPronosticoSemanalItem } from './HomePrincipalPronosticoSemanalItem';
import PrincipalContext from './../principal/PrincipalContext';

export const HomePrincipalPronosticoSemanal = () => {

    const { myLocationWeatherForecast } = useContext(PrincipalContext);

    // useEffect(() => {
    //     if (myLocationWeather !== null) {
    //         getCurrentWeatherForecastByLocation(myLocationWeather.latitude, myLocationWeather.longitude, "metric", "es");
    //     }
    // }, [myLocationWeather])


    return (
        <>
            <div className="forecast-container">
                {
                    myLocationWeatherForecast !== null &&
                    <>
                        {
                            myLocationWeatherForecast.map(forecast => {
                                return <HomePrincipalPronosticoSemanalItem key={forecast.dt} forecast={forecast} />
                            })
                        }
                    </>
                }
            </div>

            {/* <div>
                <p>LOCATION WEATHER FORECAST</p>
                <pre>{JSON.stringify(myLocationWeatherForecast, null, 3)}</pre>
            </div> */}
        </>
    )
}
