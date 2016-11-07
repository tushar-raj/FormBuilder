// @flow

import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

import LeftPaneItem from '../components/LeftPaneItem';
import ItemTypes from '../../../constants/itemTypes';

const basicImagePath = '../assets/';

/*This needs to be moved elsewhere */

const arrOfComponentLabels = [{
    imagePath: basicImagePath + 'textarea.png',
    componentTitle: 'Text Area',
    name: ''
}, {
    imagePath: basicImagePath + 'inputtext.png',
    componentTitle: 'Textbox',
    name: 'Textbox'
}, {
    imagePath: basicImagePath + 'radio_button.png',
    componentTitle: 'Radio Button Group',
    name: 'RadioButtonGroup'
}, {
    imagePath: basicImagePath + 'checkbox.png',
    componentTitle: 'Checkbox Group',
    name: ''
}, {
    imagePath: basicImagePath + 'drop_down_list.png',
    componentTitle: 'Dropdown',
    name: ''
}, {
    imagePath: basicImagePath + 'button.jpg',
    componentTitle: 'Button',
    name: 'Button'
}];

const componentLabelItems = arrOfComponentLabels.map( (item,index) =>
    /*
    Ideally some unique id should be used for key,
    for the time being index has been used,
    this should be replaced once stable Ids are available
    */
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
          <div>
           {componentLabelItems}
          </div>
        );
    }
}
