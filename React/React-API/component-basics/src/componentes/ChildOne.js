import React, { Component } from 'react';
import GrandChild from './GrandChild'
class ChildOne extends Component {
    render() {
        return (
            <div>
               <GrandChild />
            </div>
        );
    }
}

export default ChildOne;