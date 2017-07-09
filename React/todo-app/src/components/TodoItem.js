import React, { Component } from 'react';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false }
    }

    handleSubmit(text) {
        let { todo, deleteTodo ,editTodo} = this.props;
        if (!text.trim()) {
            deleteTodo(todo.id)
        } else {
            editTodo(todo.id,text);
            this.setState({editing:false});
        }
    }

    renderTodo() {
        let { todo, deleteTodo, completeTodo } = this.props;
        if (!this.state.editing) {
            return (
                <div className="view">
                    <input className="toggle" type="checkbox"
                        checked={todo.completed}
                        onChange={() => { completeTodo(todo.id) }} />
                    <label onDoubleClick={() => { this.setState({ editing: true }) }}>{todo.title}</label>
                    <button className="destroy" onClick={() => { deleteTodo(todo.id) }}></button>
                </div>
            )
        } else {
            return <TodoTextInput text={todo.title} onSubmit={this.handleSubmit.bind(this)} />
        }
    }

    render() {
        let { todo } = this.props;
        return (
            <li className={classnames({ completed: todo.completed, 'other-class': true })}>
                {this.renderTodo()}
            </li>
        );
    }
}

export default TodoItem;