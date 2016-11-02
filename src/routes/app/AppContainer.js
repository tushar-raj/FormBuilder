// @flow

import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { Grid, Row, Col } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import CenterPane from './containers/CenterPane';
import RightPane from './containers/RightPane';



class AppContainer extends React.Component {

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

//syntax for React-DnD (it needs a wrapped DragDropContext):
export default DragDropContext(HTML5Backend)(AppContainer);
