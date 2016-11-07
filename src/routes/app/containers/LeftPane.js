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
    iconUnicode: '',
    name: '',
}, {
    imagePath: 'input_textbox.png',
    componentTitle: 'Textbox',
    iconUnicode: '▭',
    name: 'Textbox',
}, {
    imagePath: 'options_radio.png',
    componentTitle: 'Radio Button Group',
    iconUnicode: '🔘',
    name: 'RadioButtonGroup',
}, {
    imagePath: 'options_checkbox.png',
    componentTitle: 'Checkbox Group',
    iconUnicode: '☑',
    name: '',
}, {
    imagePath: 'input_selectbox.png',
    componentTitle: 'Dropdown',
    iconUnicode: '',
    name: '',
}, {
    imagePath: 'input_password.png',
    componentTitle: 'Button',
    iconUnicode: '',
    name: 'Button',
}];

const leftPaneItems = arrOfComponentLabels.map(
    (item, index) =>
        <LeftPaneItem
            key = { index }
            imagePath = { item.imagePath }
            componentTitle = { item.componentTitle }
            iconUnicode = { item.iconUnicode }
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
