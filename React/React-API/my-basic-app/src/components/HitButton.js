import React, { Component } from 'react';
import PropTypes from "prop-types";

class HitButton extends Component {

    constructor(props) {
        super(props);
        console.log('HitButton instance created..');
    }

    render() {
        console.log('HitButton:render()');
        //let label=this.props.label
        //let anotherProp=this.props.anotherProp
        let { label, color } = this.props; // destructuring syntax
        return (
            <div className="well hit-button">
                <button onClick={this.handleClick.bind(this)}
                    className="btn btn-primary"
                    style={{ backgroundColor: color }}>
                    +{label}
                </button>
            </div>
        );
    }

    handleClick() {
        this.props.onKick(this.props.label);
    }


}



HitButton.propTypes = {
    label: PropTypes.number.isRequired
}

export default HitButton;