import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


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
      </div>
      <div className="row">
        <div className="col">
          <TodoList todos={todoData} />
        </div>
      </div>
    </div >
  );
}


ReactDOM.render(<App />, document.getElementById('root'));