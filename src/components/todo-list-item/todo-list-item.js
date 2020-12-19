import React, { Component } from 'react';

import './todo-list-item.css';


class TodoListItem extends Component {

    state = {
        done: false
    };

    onLabelClick = () => {
        console.log(`Click ${this.props.label}`);
        this.setState({
            done: !this.state.done
        });
    };


    render() {

        const { label, important = false } = this.props;
        const { done } = this.state;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        return (
            <span className={classNames} >
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <div className="todo-list-item-buttons">
                    <button className="btn btn-danger action-button">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-success">
                        <i className="fa fa-bolt" aria-hidden="true"></i>
                    </button>
                </div>
            </span >
        );
    }
}


export default TodoListItem;