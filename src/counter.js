// @flow

import React from 'react';

import { Button } from 'react-bootstrap';

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
        return ( <Button onClick = {
                () => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }
            }
            bsStyle="info" bsSize="large"
            >

                Count: {
                    this.state.count
                }

            </Button>
        );
    }
}
export default Counter;
