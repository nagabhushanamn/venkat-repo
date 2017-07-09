import React, { Component } from 'react';

class Display extends Component {
   
    constructor(props) {
        super(props);
        console.log('Display instance created');
    }

    render() {
        console.log('Display render');
        return (
            <div className="alert alert-danger">
                <span className="badge">{this.props.value}</span>
            </div>
        );
    }
}

export default Display;