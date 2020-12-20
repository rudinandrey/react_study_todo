import React, { Component } from 'react';

import './todo-list-item.css';


const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <span className={classNames} >
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>

            <div className="todo-list-item-buttons">
                <button className="btn btn-danger action-button" onClick={onDeleted}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button className="btn btn-success" onClick={onToggleImportant}>
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                </button>
            </div>
        </span >
    );
}



export default TodoListItem;