import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { HomeScreen } from '../screens/HomeScreen';

export const AppRouter = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/"} component={HomeScreen} />
            </Switch>
        </HashRouter>
    )
}
