import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return (
            <div className="alert alert-warning">
                {this.props.greet}
            </div>
        );
    }
}

Greeting.defaultProps = {
  greet: 'Hello'
};

export default Greeting;