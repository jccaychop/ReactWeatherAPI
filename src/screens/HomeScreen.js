import React from 'react';
import { HomePrincipalLocation } from './../components/HomePrincipalLocation';
import { HomePrincipalContainer } from '../components/HomePrincipalContainer';
import { HomePrincipalPorcentajeCircular } from '../components/HomePrincipalPorcentajeCircular';
import { HomePrincipalPronosticoSemanal } from '../components/HomePrincipalPronosticoSemanal';
import { FormularioOptions } from './../components/FormularioOptions';

import '../App.css';

export const HomeScreen = () => {

    return (
        <>
            <div className="container mt-2">
                <FormularioOptions />
                <HomePrincipalLocation />

                <div>
                    <HomePrincipalContainer />

                    <HomePrincipalPorcentajeCircular />

                    {/* PRONOSTICO DE LA SEMANA */}
                    <HomePrincipalPronosticoSemanal />

                </div>
            </div>

        </>
    )
}
