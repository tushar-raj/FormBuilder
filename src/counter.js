// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

/**
 * A counter button: tap the button to increase the count.
 */

class Counter extends React.Component {

    state: {
        count: number
    }

    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div>
            <Button
                onClick = {
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        });
                    }
                }
                bsStyle="info"
                bsSize="large"
            >

                Count: {
                    this.state.count
                }

            </Button>
            <Link to="/countdown">Go to countdown button</Link>
            </div>
        );
    }
}
export default Counter;
