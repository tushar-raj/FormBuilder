import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import Counter from './Counter';
import Countdown from './Countdown';


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Counter} />
            <Route path="/countdown" component={Countdown} />
        </Router>
        //React.createElement(Counter)
        ,
        document.getElementById('mount')
    );
});
