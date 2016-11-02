// @flow

import React from 'react';
//import { Link } from 'react-router';
//import { PageHeader, Button } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import CenterPane from './containers/CenterPane';
import RightPane from './containers/RightPane';

export default class AppContainer extends React.Component {
    
    render() {
        return (
            <div className="Wrapper">
                <LeftPane />
                <CenterPane />
                <RightPane />
            </div>
        );
    }
}
