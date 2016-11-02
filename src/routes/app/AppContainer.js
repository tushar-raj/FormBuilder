// @flow

import React from 'react';
//import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import CenterPane from './containers/CenterPane';
import RightPane from './containers/RightPane';

export default class AppContainer extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}><LeftPane /></Col>
                    <Col md={4}><CenterPane /></Col>
                    <Col md={4}><RightPane /></Col>
                </Row>
            </Grid>
        );
    }
}
