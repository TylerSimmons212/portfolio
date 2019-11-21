import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Component Routes
import Home from './Components/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
    </Switch>
)