import React, { Component } from "react";

import './add-item.css';

export default class AddItem extends Component {



  render() {
    const { onAddItem } = this.props;
    return (
      <form className="add-item d-flex">
        <input type="text" className="form-control" onChange={this.onLabelChange} />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onAddItem("Hello world")}
        >
          Add item
        </button>
      </form>
    );
  }
}
