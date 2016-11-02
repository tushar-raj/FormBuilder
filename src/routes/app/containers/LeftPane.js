// @flow

import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

import LeftPaneItem from '../components/LeftPaneItem';
import ItemTypes from '../../../constants/itemTypes';


export default class LeftPane extends React.Component {

    render() {
        return (
            <ButtonGroup vertical>
                <LeftPaneItem name="Button"/>
                <LeftPaneItem name="Textbox"/>
            </ButtonGroup>
        );
    }
}
