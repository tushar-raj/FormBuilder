// @flow

import React from 'react';

import LeftPaneItem from '../components/LeftPaneItem';
import ItemTypes from '../../../constants/itemTypes';
// import textboxImg from '../assets/input_textbox.png'

const basicImagePath = '../assets/';

// const basicImagePath = '/';

/*This needs to be moved elsewhere */

const leftPaneItemArray = [
    {
        imagePath: 'input_textbox.png',
        componentTitle: 'Textbox',
        name: 'Textbox',
    }, {
        imagePath: 'input_textarea.png',
        componentTitle: 'Text Area',
        name: 'TextArea',
    }, {
        imagePath: 'options_checkbox.png',
        componentTitle: 'Checkbox Group',
        name: 'CheckboxGroup',
    }, {
        imagePath: 'options_radio.png',
        componentTitle: 'Radio Button Group',
        name: 'RadioButtonGroup',
    }, {
        imagePath: 'input_selectbox.png',
        componentTitle: 'Dropdown',
        name: '',
    }, {
        imagePath: 'button_ok.png',
        componentTitle: 'Button',
        name: 'Button',
    }
];

const leftPaneItems = leftPaneItemArray.map(
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
            <div id = 'LeftPane'>
                { leftPaneItems }
            </div>
        );
    }
}
