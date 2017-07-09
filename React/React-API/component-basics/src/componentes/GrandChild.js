import React, { Component } from 'react';

class GrandChild extends Component {
    render() {
        return (
            <div>
                {this.context.color}
            </div>
        );
    }
}


GrandChild.contextTypes = {
  color:  React.PropTypes.string
};

export default GrandChild;