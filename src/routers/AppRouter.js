import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen } from '../screens/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/"} component={HomeScreen} />
            </Switch>
        </Router>
    )
}
