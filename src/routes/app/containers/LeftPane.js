// @flow

import React from 'react';
import { Link } from 'react-router';
import { PageHeader, Button } from 'react-bootstrap';

/**
 * A counter button: tap the button to increase the count.
 */

export default class LeftPane extends React.Component {

    render() {
        return (
            <div>
            <PageHeader>This is the homepage.</PageHeader>
            Users will log in from here<br />
            <Link to="/app">Go to app</Link>
            </div>
        );
    }
}
