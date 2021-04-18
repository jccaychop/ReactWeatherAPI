import React from 'react';
import { CircleProgress } from 'react-gradient-progress';

export const HomePrincipalPorcentajeCircularItem = ({ circular }) => {

    return (
        <div className="porcentaje-circular-item">
            <CircleProgress
                percentage={circular.value}
                strokeWidth={15}
                strokeLinecap="butt"
                primaryColor={['#26B6DB', '#c1e1ee']}
                secondaryColor="white"
                fontSize="35px"
            />
            <div className="text-center font-weight-bold">{circular.title}</div>
        </div>
    )
}
