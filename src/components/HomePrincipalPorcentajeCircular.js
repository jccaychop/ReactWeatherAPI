import React, { useContext } from 'react';
import { HomePrincipalPorcentajeCircularItem } from './HomePrincipalPorcentajeCircularItem';
import PrincipalContext from './../principal/PrincipalContext';

export const HomePrincipalPorcentajeCircular = () => {

    const { myLocationWeather, loading } = useContext(PrincipalContext);

    return (
        <div className="porcentaje-circular">
            {
                !loading && myLocationWeather.percentage.map((circular, id) => {
                    return <HomePrincipalPorcentajeCircularItem key={id} circular={circular} />
                })
            }
        </div>
    )
}
