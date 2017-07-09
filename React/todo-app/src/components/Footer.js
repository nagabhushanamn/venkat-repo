import React, { Component } from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/todo-filters';
import classnames from 'classnames';

class Footer extends Component {
    render() {
        let {completedCount,onChangeFilter,clearCompleted,filter}=this.props;
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{completedCount}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className={classnames({selected:filter===SHOW_ALL})} href="#/" onClick={()=>{onChangeFilter(SHOW_ALL)}}>All</a>
                    </li>
                    <li>
                        <a className={classnames({selected:filter===SHOW_ACTIVE})} href="#/active"  onClick={()=>{onChangeFilter(SHOW_ACTIVE)}}>Active</a>
                    </li>
                    <li>
                        <a className={classnames({selected:filter===SHOW_COMPLETED})} href="#/completed"  onClick={()=>{onChangeFilter(SHOW_COMPLETED)}}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={()=>{clearCompleted()}}>Clear completed</button>
            </footer>
        );
    }
}

export default Footer;