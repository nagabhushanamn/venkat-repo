import React, { Component } from 'react';

class Container extends Component {
    render() {
        return (
            <div className="well">
                {this.props.children}
            </div>
        );
    }
}

export default Container;