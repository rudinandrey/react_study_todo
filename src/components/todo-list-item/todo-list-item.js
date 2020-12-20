import React, { Component } from 'react';

import './todo-list-item.css';


class TodoListItem extends Component {

    state = {
        done: false,
        important: this.props.important
    };

    onLabelClick = () => {
        console.log(`Click ${this.props.label}`);
        this.setState(({ done }) => {
            return {
                done: !done
            }
        });
    };

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        });
    }


    render() {

        const { label, onDeleted, onToggleImportant, onToggleDone } = this.props;
        const { done, important } = this.state;


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
}


export default TodoListItem;