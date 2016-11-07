// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LeftPaneItem from '../components/LeftPaneItem';
import ItemTypes from '../../../constants/itemTypes';
// import textboxImg from '../assets/input_textbox.png'

const basicImagePath = '../assets/';

// const basicImagePath = '/';

/*This needs to be moved elsewhere */

const arrOfComponentLabels = [{
    imagePath: 'input_textarea.png',
    componentTitle: 'Text Area',
    name: '',
}, {
    imagePath: 'input_textbox.png',
    componentTitle: 'Textbox',
    name: 'Textbox',
}, {
    imagePath: 'options_radio.png',
    componentTitle: 'Radio Button Group',
    name: 'RadioButtonGroup',
}, {
    imagePath: 'options_checkbox.png',
    componentTitle: 'Checkbox Group',
    name: '',
}, {
    imagePath: 'input_selectbox.png',
    componentTitle: 'Dropdown',
    name: '',
}, {
    imagePath: 'button_ok.png',
    componentTitle: 'Button',
    name: 'Button',
}];

const leftPaneItems = arrOfComponentLabels.map(
    (item, index) =>
        <LeftPaneItem
            key = { index }
            imagePath = { item.imagePath }
            componentTitle = { item.componentTitle }
            name = { item.name }
        />
    );
export default class LeftPane extends React.Component {

    render() {
        return (
            <Grid>
                { leftPaneItems }
            </Grid>
        );
    }
}
