// @flow

import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { Grid, Row, Col } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import CenterPane from './containers/CenterPane';
import RightPane from './containers/RightPane';
import TopPane from './containers/TopPane';



class AppContainer extends React.Component {

    render() {
        return (
            <Grid id='mainGrid'>
                <Row className='mainGridRow'>
                    <Col md={12}><TopPane /></Col>
                </Row>
                <Row>
                    <Col md={2} id='leftPaneColumn' className='mainColumns'><LeftPane/></Col>
                    <Col md={8} id='centerPaneColumn' className='mainColumns'><CenterPane /></Col>
                    <Col md={2} id='rightPaneColumn' className='mainColumns'><RightPane /></Col>
                </Row>
            </Grid>
        );
    }
}

//syntax for React-DnD (it needs a wrapped DragDropContext):
export default DragDropContext(HTML5Backend)(AppContainer);
