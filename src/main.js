import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Home from './routes/home/components/HomeView';
import AppContainer from './routes/app/AppContainer'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/app" component={AppContainer} />
        </Router>
        ,
        document.getElementById('mount')
    );
});
