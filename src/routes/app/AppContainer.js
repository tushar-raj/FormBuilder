// @flow

import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { Grid, Row, Col } from 'react-bootstrap';

import LeftPane from './containers/LeftPane';
import CenterPane from './containers/CenterPane';
import RightPane from './containers/RightPane';
import TopPane from './containers/TopPane';

import PubSub from './PubSub/PubSub'

class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSelectedComponentData:{},
            selectedComponentUpdatedData:{}
        }

        this.onGetCurrentSelectedComponentData = this.onGetCurrentSelectedComponentData.bind(this);        
        this.onReceiveUpdatedData = this.onReceiveUpdatedData.bind(this);
    }

    onGetCurrentSelectedComponentData(componentData){
        console.log('componentData in appcontainer', componentData);
        PubSub.publish('fillRightPaneWithData', componentData);
    }

    onReceiveUpdatedData(updatedData){
        console.log('updatedData', updatedData)
        PubSub.publish('updateCanvasComponent', updatedData);
    }
    render() {
        return (
            <Grid id='mainGrid' className=''>
                <Row className='mainGridRow'>
                    <Col md={12}><TopPane /></Col>
                </Row>
                <Row>
                    <Col md={2} sm={2} xs={2} id='leftPaneColumn' className='mainColumns w3-theme-l2'><LeftPane/></Col>
                    <Col md={7} sm={7} xs={7} id='centerPaneColumn' className='mainColumns w3-theme-l4'>
                        <CenterPane getCurrentSelectedComponentData = { this.onGetCurrentSelectedComponentData }/>
                    </Col>
                    <Col md={3} sm={3} xs={3} id='rightPaneColumn' className='mainColumns w3-theme-l2'>
                        <RightPane receiveUpdatedData={this.onReceiveUpdatedData} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

//syntax for React-DnD (it needs a wrapped DragDropContext):
export default DragDropContext(HTML5Backend)(AppContainer);
