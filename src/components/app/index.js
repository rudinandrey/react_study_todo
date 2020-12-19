import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Build React App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newTodoData = [...before, ...after];

            return {
                todoData: newTodoData
            };
        });
    }


    render() {
        const { todoData } = this.state;
        return (
            <div className="container">
                <div className="row  form-group">
                    <div className="col">
                        <AppHeader />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <SearchPanel />
                    </div>
                    <div className="col-auto">
                        <ItemStatusFilter />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <TodoList todos={todoData} onDeleted={this.deleteItem} />
                    </div>
                </div>
            </div >
        );
    }
}
