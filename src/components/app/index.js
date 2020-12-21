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
    term: '',
    filter: 'all'
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
    const newItem = this.createNewItem(text);

    this.setState(({todoData}) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  };

  toggleProperty(arr, id, propertyName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
    return [
      ...arr.slice(0, idx), 
      newItem, 
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    console.log('### togle important ' + id);
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  onToggleDone = (id) => {
    console.log('### togle done ' + id);
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  search(items, term) {
    if (term == '') return items;

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filter(items, filter) {
    console.log(`## filter is ${filter}`);
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default: 
        return items;
    }
  }

  onChangeTerm = (newTerm) => {
    console.log(`## setTerm is ${newTerm}`);
    this.setState({
      term: newTerm
    })
  }

  onChangeFilter = (filter) => {
    this.setState({
      filter
    });
  }

  render() {
    const { todoData, term, filter } = this.state;


    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el)=>el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <div className="row  form-group">
          <div className="col">
            <AppHeader toDo={todoCount} done={doneCount} />
          </div>
        </div>
        <div className="row form-group">
          <div className="col">
            <SearchPanel onSetTerm={this.onChangeTerm} />
          </div>
          <div className="col-auto">
            <ItemStatusFilter 
              onChangeFilter={this.onChangeFilter} 
              filter={filter} />
          </div>
        </div>
        <div className="row form-group">
          <div className="col">
            <TodoList todos={visibleItems} 
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
