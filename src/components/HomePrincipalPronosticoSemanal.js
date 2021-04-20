import React, { useContext } from 'react';
import { HomePrincipalPronosticoSemanalItem } from './HomePrincipalPronosticoSemanalItem';
import PrincipalContext from './../principal/PrincipalContext';

export const HomePrincipalPronosticoSemanal = () => {

    const { myLocationWeatherForecast } = useContext(PrincipalContext);

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
        </>
    )
}
