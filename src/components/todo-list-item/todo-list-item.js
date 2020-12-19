import React, { Component } from 'react';

import './todo-list-item.css';


class TodoListItem extends Component {
    render() {

        const { label, important = false } = this.props;
        const style = {
            color: important ? 'tomato' : 'black'
        };
        return (
            <span className="todo-list-item" style={style}>
                <span className="todo-list-item-label">
                    {label}
                </span>

                <div className="todo-list-item-buttons">
                    <button className="btn btn-danger">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>&nbsp;
                    <button className="btn btn-success">
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                    </button>
                </div>
            </span>
        );
    }
}


export default TodoListItem;