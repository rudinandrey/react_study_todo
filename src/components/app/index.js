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
            <TodoList todos={todoData} onDeleted={this.deleteItem} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddItem />
          </div>
        </div>
      </div>
    );
  }
}
