// @flow

import React from 'react';
import { PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';

export default class LeftPane extends React.Component {

    render() {
        const themeLink: HTMLElement = document.getElementById("themeSheetLink");

        const themeKeyMap: Object = {
            'red': 'red',
            'blue': 'cyan',
            'green': 'light-green',
            'yellow': 'amber',
            'brown': 'brown',
            'pink': 'pink',
            'default': 'blue-grey',
        };

        let onSelectTheme: Function = (eventKey: string) => {
            const themeName = themeKeyMap[eventKey];
            const themeSheetUrl = 'http://www.w3schools.com/lib/w3-theme-' + themeName + '.css';
            themeLink.setAttribute('href', themeSheetUrl);
        }

        return (
            <PageHeader className='w3-text-theme'>
                Welcome to Form Builder

                <div className='themeButtonWrapper'>
                <DropdownButton id='themeButton' className='w3-theme-d2' title='Themes' pullRight>
                    <MenuItem eventKey="red" onSelect={onSelectTheme} > Red </MenuItem>
                    <MenuItem eventKey="blue" onSelect={onSelectTheme} > Blue </MenuItem>
                    <MenuItem eventKey="green" onSelect={onSelectTheme} > Green </MenuItem>
                    <MenuItem eventKey="yellow" onSelect={onSelectTheme} > Yellow </MenuItem>
                    <MenuItem eventKey="brown" onSelect={onSelectTheme} > Brown </MenuItem>
                    <MenuItem eventKey="pink" onSelect={onSelectTheme} > Pink </MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="default" onSelect={onSelectTheme}>Default</MenuItem>
                </DropdownButton>
                </div>
            </PageHeader>

        );
    }

    onSelectTheme(){

    }
}
