import React from 'react';
import TodoListItem from './todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} />
                <div>
                    <button className="btn btn-danger">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>&nbsp;
                    <button className="btn btn-success">
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                    </button>
                </div>

            </li >
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;