import React, { Component } from 'react';
import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './constants/todo-filters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'todomvc-app-css/index.css'

import * as actionCreators from './actions/todos';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: SHOW_ALL
    };
  }


  changeFilter(newFilter) {
    this.setState({ filter: newFilter });
  }

  renderMainSection(todos) {
    if (todos.length) {
      return (
        <MainSection todos={todos} {...this.props.myActions} />
      )
    }
  }

  renderFooter(completedCount) {
    let { newTodos: todos } = this.props;
    if (todos.length) {
      const activeCount = todos.length - completedCount
      return <Footer
        filter={this.state.filter}
        completedCount={activeCount}
        onChangeFilter={this.changeFilter.bind(this)}
        clearCompleted={this.props.myActions.clearCompleted}
      />
    }
  }


  render() {

    let { filter } = this.state;

    let { newTodos: todos } = this.props;

    const TODO_FILTERS = {
      [SHOW_ALL]: () => true,
      [SHOW_ACTIVE]: todo => !todo.completed,
      [SHOW_COMPLETED]: todo => todo.completed
    }
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)

    return (
      <section className="todoapp">
        <Header onSubmit={this.props.myActions.addTodoAsync} />
        {this.renderMainSection(filteredTodos)}
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { newTodos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    myActions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


