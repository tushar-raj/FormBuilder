import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Counter from './Counter';
import Countdown from './Countdown';
import Home from './routes/home/components/HomeView';
import AppContainer from './routes/app/AppContainer'
import LeftPane from './routes/app/containers/LeftPane'
import CenterPane from './routes/app/containers/CenterPane'
import RightPane from './routes/app/containers/RightPane'


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
