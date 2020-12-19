import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];
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
                    <TodoList todos={todoData} />
                </div>
            </div>
        </div >
    );
}

export default App;