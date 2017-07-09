import React, { Component } from 'react';
import ChildOne from './ChildOne'
import {PropTypes} from 'prop-types';

class Box extends Component {

    // context to share any child compoenents  
    getChildContext() {
        return { color: "blue" };
    }

    render() {
        return (
            <div>

                <ChildOne />

            </div>
        );
    }
}


Box.childContextTypes = {
    color: React.PropTypes.string
};

export default Box;