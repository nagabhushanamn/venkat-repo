import React, { Component } from 'react';
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './constants/todo-filters';

import 'todomvc-app-css/index.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Learn JavScript', completed: true },
        { id: 2, title: 'Learn React', completed: false }
      ],
      filter: SHOW_ALL
    };
  }

  //-------------------------------------------------------------------------------

  addTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
  deleteTodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }
  completeTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return (todo.id === id) ? Object.assign({}, todo, { completed: !todo.completed }) : todo
      })
    });
  }
  completeAll() {
    let isAllCompleted = this.state.todos.every(todo => todo.completed);
    this.setState({
      todos: this.state.todos.map(todo => {
        return Object.assign({}, todo, { completed: !isAllCompleted })
      })
    });
  }
  editTodo(id, text) {
    this.setState({
      todos: this.state.todos.map(todo => {
        return (todo.id === id) ? Object.assign({}, todo, { title: text }) : todo
      })
    });
  }

  clearCompleted() {
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
  }

  //-------------------------------------------------------------------------------


  changeFilter(newFilter) {
    this.setState({ filter: newFilter });
  }

  renderMainSection(todos) {
    if (todos.length) {
      return (
        <MainSection todos={todos}
          completeTodo={this.completeTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          completeAll={this.completeAll.bind(this)}
          editTodo={this.editTodo.bind(this)}
        />
      )
    }
  }

  renderFooter(completedCount) {
    let { todos } = this.state;
    if (todos.length) {
      const activeCount = todos.length - completedCount
      return <Footer
        filter={this.state.filter}
        completedCount={activeCount}
        onChangeFilter={this.changeFilter.bind(this)}
        clearCompleted={this.clearCompleted.bind(this)}
      />
    }
  }


  render() {

    let { todos, filter } = this.state;

    const TODO_FILTERS = {
      [SHOW_ALL]: () => true,
      [SHOW_ACTIVE]: todo => !todo.completed,
      [SHOW_COMPLETED]: todo => todo.completed
    }
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)

    return (
      <section className="todoapp">
        <Header onSubmit={this.addTodo.bind(this)} />
        {this.renderMainSection(filteredTodos)}
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default App;
