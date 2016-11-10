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

import styles from './styles/appContainer.css'

class AppContainer extends React.Component {

    state: {
        currentSelectedComponentData: Object,
        selectedComponentUpdatedData: Object,
    }

    constructor(props){
        super(props);
        this.state = {
            currentSelectedComponentData:{},
            selectedComponentUpdatedData:{},
        }

        const self: any = this;

        self.onGetCurrentSelectedComponentData = this.onGetCurrentSelectedComponentData.bind(this);
        self.onReceiveUpdatedData = this.onReceiveUpdatedData.bind(this);
    }

    onGetCurrentSelectedComponentData(componentData){
        PubSub.publish('fillRightPaneWithData', componentData);
    }

    onReceiveUpdatedData(updatedData){
        PubSub.publish('updateCanvasComponent', updatedData);
    }
    render() {
        return (
            <Grid id = 'mainGrid' className = {styles.mainGrid}>
                <Row className = {styles.mainGridRow}>
                    <Col md={12}>
                        <TopPane />
                    </Col>
                </Row>

                <Row>

                    <Col md={2} sm={2} xs={2}
                        id = 'leftPaneColumn'
                        className = {styles.mainColumns + ' ' + styles.leftPaneColumn + ' w3-theme-l2'}
                    >
                        <LeftPane/>
                    </Col>

                    <Col md={7} sm={7} xs={7}
                        id='centerPaneColumn'
                        className = {styles.mainColumns + ' ' + styles.centerPaneColumn + ' w3-theme-l4'}
                    >
                        <CenterPane getCurrentSelectedComponentData = { this.onGetCurrentSelectedComponentData }/>
                    </Col>

                    <Col md={3} sm={3} xs={3}
                        id='rightPaneColumn'
                        className = {styles.mainColumns + ' ' + styles.rightPaneColumn + ' w3-theme-l2'}
                    >
                        <RightPane receiveUpdatedData={this.onReceiveUpdatedData} />
                    </Col>

                </Row>
            </Grid>
        );
    }
}

//syntax for React-DnD (it needs a wrapped DragDropContext):
export default DragDropContext(HTML5Backend)(AppContainer);
