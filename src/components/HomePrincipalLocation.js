import moment from 'moment';
import React, { useContext } from 'react';
import PrincipalContext from './../principal/PrincipalContext';

export const HomePrincipalLocation = () => {
    const { myLocation, loading } = useContext(PrincipalContext);

    return (
        <>
            {!loading &&
                <>
                    <h1 className="display-4 text-center font-weight-bold">
                        <span>{myLocation.stateProv}</span>, <span>{myLocation.country}</span> <span><img src={myLocation.countryFlag} alt="country flag" /></span>
                    </h1>
                    <h3 className="text-center">{moment.unix(myLocation.currentTime).format('ddd, D MMM YYYY')}</h3>
                </>
            }
        </>
    )
}
