import React from 'react';
import { PrincipalState } from './principal/PrincipalState';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
    return (
        <PrincipalState>
            <AppRouter />
        </PrincipalState>
    )
}
