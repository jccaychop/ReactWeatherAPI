import React from 'react';
import moment from 'moment';
import { capitalizeLetter } from './../helpers/capitalizeLetter';

export const HomePrincipalPronosticoSemanalItem = ({ forecast }) => {

    const { dt, temp, weather } = forecast;

    return (
        <div className="forecast-item card text-center" style={{ width: '10rem' }}>
            <div className="card-body">
                <h3 className="font-weight-bold">{moment.unix(dt).format('ddd')}</h3>
                <h3 className=""><span className="forecast-temp-max">{Math.round(temp.max)}°</span> / <span className="forecast-temp-min">{Math.round(temp.min)}°</span></h3>
                <img className="forecast-icon" src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
                <h6 className="forecast-description">{capitalizeLetter(weather[0].description)}</h6>
            </div>
        </div>
    )
}
