import React, { Component } from 'react';
import TodoItem from './TodoItem'

class MainSection extends Component {

    renderTodos() {
        let {todos,deleteTodo,completeTodo,editTodo}=this.props;
        return todos.map(function (todo, i) {
            return <TodoItem key={i} todo={todo} 
                             deleteTodo={deleteTodo} 
                             completeTodo={completeTodo}
                             editTodo={editTodo}
                             />
        });
    }

    render() {
        let {completeAll}=this.props;
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" onClick={()=>{completeAll()}}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {this.renderTodos()}
                </ul>
            </section>
        );
    }
}

export default MainSection;