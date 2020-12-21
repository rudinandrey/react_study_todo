import React, { Component } from "react";

import './add-item.css';

export default class AddItem extends Component {

  state = {
    label: ""
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ""
    });
    console.log(`### this.state.label is ${this.state.label}`);
  }

  render() {
    const { onAddItem } = this.props;
    return (
      <form className="add-item d-flex" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onLabelChange} value={this.state.label} />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.onSubmit}
        >
          Add item
        </button>
      </form>
    );
  }
}
