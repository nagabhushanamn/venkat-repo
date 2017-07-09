import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput'
class Header extends Component {

    handleSubmit(text) {
        this.props.onSubmit(text);
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput placeholder="What needs to be done?" 
                               onSubmit={this.handleSubmit.bind(this)} />
            </header>
        );
    }
}

export default Header;