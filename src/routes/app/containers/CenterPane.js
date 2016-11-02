// @flow

import React from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

/**
 * A counter button: tap the button to increase the count.
 */

export default class CenterPane extends React.Component {

    render() {
        return (
            <div style={{
                backgroundColor: 'salmon'
            }}>
                Canvas:
                <div id="Canvas" style={{
                    width: '90%',
                    height: '500px',
                    margin: 'auto',
                    backgroundColor: 'white'
                }}></div>
            </div>
        );
    }
}
