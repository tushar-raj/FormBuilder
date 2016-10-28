// @flow

import React from 'react';
//import { Link } from 'react-router';
//import { PageHeader, Button } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import MiddlePane from './containers/MiddlePane';
import RightPane from './containers/RightPane';

export default class AppContainer extends React.Component {

    // Wrapper(){
    //     return(
    //         <div className="Wrapper">{this.props.children}</div>
    //     )
    // }


    render() {
        return (
            <div className="Wrapper">{this.props.children}</div>
        );
    }
}
