import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";
import AddItem from "../add-item";

export default class App extends Component {

  maxId = 0;

  state = {
    todoData: [
      this.createNewItem('Drink Coffee'),
      this.createNewItem('Build React App'),
      this.createNewItem('Have a lunch')
    ],
  };
  
  createNewItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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
    const newItem = createNewItem(text);

    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  };

  onToggleImportant = (id) => {
    console.log('### togle important ' + id);
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important};
      return {
        todoData: [
          ...todoData.slice(0, idx), 
          newItem, 
          ...todoData.slice(idx + 1)
        ]
      }
    });
  }

  onToggleDone = (id) => {
    console.log('### togle done ' + id);
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      return {
        todoData: [
          ...todoData.slice(0, idx), 
          newItem, 
          ...todoData.slice(idx + 1)
        ]
      }
    });
  }

  render() {
    const { todoData } = this.state;

    const doneCount = this.state.todoData.filter((el)=>el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="container">
        <div className="row  form-group">
          <div className="col">
            <AppHeader toDo={todoCount} done={doneCount} />
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
