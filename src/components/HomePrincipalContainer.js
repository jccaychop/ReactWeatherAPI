import React, { useContext } from 'react';
import PrincipalContext from './../principal/PrincipalContext';
import { capitalizeLetter } from './../helpers/capitalizeLetter';
import moment from 'moment';

export const HomePrincipalContainer = () => {

    const { options, myLocation, myLocationWeather, loading } = useContext(PrincipalContext);

    return (
        <>
            {
                !loading &&
                <>
                    <div>
                        <div className="principal-container">
                            <div className="principal-left">
                                <img className="principal-icon" src={`http://openweathermap.org/img/wn/${myLocationWeather.icon}@4x.png`} alt="icono" />
                            </div>

                            <div className="principal-right">
                                <ul>
                                    <li className="list-temp text-center"><span>{Math.round(myLocationWeather.temp)}</span> °<span>{options.metricSymbol}</span></li>
                                    <li className="list-description text-center font-weight-bold">{capitalizeLetter(myLocationWeather.description)}</li>
                                    <li className="list-hour text-center">Updated <span>{moment.unix(myLocation.currentTime).format('hh:mm a')}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="principal-container-list">
                            <div className="principal-values col-lg-10 col-md-12 col-sm-12 col-12">
                                <ul className="principal-values-list col-md-12">
                                    <li className="col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold">
                                        Pressure : <span>{myLocationWeather.pressure}</span> hPa
                                    </li>
                                    <li className="col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold">
                                        Feels like : <span>{Math.round(myLocationWeather.feelsLike)}</span>°<span>{options.metricSymbol}</span>
                                    </li>
                                    <li className="col-md-4 col-sm-4 col-12 mb-3 text-center font-weight-bold">
                                        Temp : <span>{Math.round(myLocationWeather.tempMax)}</span>°<span>{options.metricSymbol}</span> / <span>{Math.round(myLocationWeather.tempMin)}</span>°<span>{options.metricSymbol}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
