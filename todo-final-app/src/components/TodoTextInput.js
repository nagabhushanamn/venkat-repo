import React, { Component } from 'react';

class TodoTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = { text: props.text?props.text:''}
    }

    handleKeyUp(e) {
        let val = e.target.value;
        if (e.which !== 13 || !val) return;
        this.props.onSubmit(val);
        e.target.value = '';
    }



    render() {
        return (
            <input className="new-todo"
                value={this.state.text}
                placeholder={this.props.placeholder}
                autoFocus
                onKeyUp={this.handleKeyUp.bind(this)}
                onChange={(e)=>{this.setState({text:e.target.value})}}
            />
        );
    }
}

export default TodoTextInput;