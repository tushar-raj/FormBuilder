// @flow

import React from 'react';

import LeftPaneItem from '../components/LeftPaneItem';
import ItemTypes from '../../../constants/itemTypes';
import leftPaneItems from '../../../constants/leftPaneItems';

const leftPaneItemArray: Object[] = leftPaneItems.map(
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
                { leftPaneItemArray }
            </div>
        );
    }
}
