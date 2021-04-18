import React from 'react';
import './AppWeather.css';

import { CircleProgress } from 'react-gradient-progress';

export const AppWeather = () => {

    return (
        <>
            <div className="container mt-4">
                <h1 className="display-4 text-center">Belgrade, Serbia</h1>
                <h3 className="text-center">Wed, 5 Sep 2020</h3>

                <div className="">
                    <div>
                        <div className="principal-container">
                            <div className="principal-left">
                                <img className="principal-icon" src="http://openweathermap.org/img/wn/02d@4x.png" alt="icono" />
                            </div>

                            <div className="principal-right">
                                <ul>
                                    <li className="list-temp text-center">23°C</li>
                                    <li className="list-description text-center">Partly Sunny</li>
                                    <li className="list-hour text-center">Updated 1:48 pm</li>
                                </ul>
                            </div>
                        </div>

                        <div className="prueba">
                            <div className="principal-values col-lg-10 col-md-12 col-sm-12 col-12">
                                <ul className="principal-values-list col-md-12">
                                    <li className="col-md-4 col-sm-4 col-12 text-center">Barometer 1009.0 mb</li>
                                    <li className="col-md-4 col-sm-4 col-12 text-center">Feels like 25°C</li>
                                    <li className="col-md-4 col-sm-4 col-12 text-center">Humidity 41%</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="porcentaje-circular">
                        <div className="porcentaje-circular-item">
                            <CircleProgress
                                percentage={50}
                                strokeWidth={15}
                                strokeLinecap="butt"
                                primaryColor={['#26B6DB', '#c1e1ee']}
                                secondaryColor="white"
                                fontSize="35px"
                            />
                            <div className="text-center">Precipitation</div>
                        </div>

                        <div className="porcentaje-circular-item">
                            <CircleProgress
                                percentage={41}
                                strokeWidth={15}
                                strokeLinecap="butt"
                                primaryColor={['#26B6DB', '#c1e1ee']}
                                secondaryColor="white"
                                fontSize="35px"
                            />
                            <div className="text-center">Humidity</div>
                        </div>

                        <div className="porcentaje-circular-item">
                            <CircleProgress
                                percentage={6}
                                strokeWidth={15}
                                strokeLinecap="butt"
                                primaryColor={['#26B6DB', '#c1e1ee']}
                                secondaryColor="white"
                                fontSize="35px"
                            />
                            <div className="text-center">UV Index</div>
                        </div>
                    </div>

                    {/* PRONOSTICO DE LA SEMANA */}
                    <div className="forecast-container">
                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Thu</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                            </div>
                        </div>

                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Fri</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
                            </div>
                        </div>

                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Sat</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
                            </div>
                        </div>

                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Sun</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" />
                            </div>
                        </div>

                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Mon</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
                            </div>
                        </div>

                        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
                            <div className="card-body">
                                <h3 className="">Tue</h3>
                                <h3 className=""><span className="forecast-temp-max">24°</span> / <span className="forecast-temp-min">14°</span></h3>
                                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
