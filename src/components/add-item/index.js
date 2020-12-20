import React, { Component } from "react";

export default class AddItem extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <div className="add-item">
        <div></div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onAddItem("Hello world")}
        >
          Add item
        </button>
      </div>
    );
  }
}
