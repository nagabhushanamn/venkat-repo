import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput'
class Header extends Component {

    handleSubmit(text) {
        let todo = { id: Math.floor(Math.random() * 100), title: text, completed: false }
        this.props.onSubmit(todo);
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