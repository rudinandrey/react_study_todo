import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";
import AddItem from "../add-item";

export default class App extends Component {
  
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Build React App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };
  

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      };
    });
  };

  addItem = (text) => {
    console.log("add new task");
    const maxId =
      this.state.todoData.reduce((max, el) => (el.id > max ? el.id : max), 0) +
      1;
    console.log(maxId);
    const newItem = {
      label: text,
      important: false,
      id: maxId
    };

    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  };

  onToggleImportant = (id) => {
    console.log('### togle important ' + id);
  }

  onToggleDone = (id) => {
    console.log('### togle done ' + id);
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
        <div className="row form-group">
          <div className="col">
            <TodoList todos={todoData} 
              onDeleted={this.deleteItem} 
              onToggleImportant={this.onToggleImportant} 
              onToggleDone={this.onToggleDone} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddItem onAddItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}
