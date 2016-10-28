// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */

class Countdown extends React.Component {

    state: {
        count: number
    }

    constructor() {
        super();
        this.state = {
            count: 23,
        };
    }

    render() {
        return (
            <div>
            <Button
                onClick = {
                    () => {
                        this.setState({
                            count: this.state.count - 1
                        });
                    }
                }
                bsStyle="danger"
                bsSize="large"
            >

                Count: {
                    this.state.count
                }

            </Button>
            <Link to="/">Go to home</Link>
            </div>
        );
    }
}
export default Countdown;
