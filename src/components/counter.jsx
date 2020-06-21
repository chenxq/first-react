import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        
        <span className={this.renderBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => {this.props.onDelete(this.props.counter.id)}}
          className="btn btn-danger btm-sm"
        >
          x
        </button>
      </React.Fragment>
    );
  }

  renderBadge() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
