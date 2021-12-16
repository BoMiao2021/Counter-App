import React, { Component } from "react";
import axios from "axios";

class Counter extends React.Component {
  // do not need state in Counter Component anymore, the value should be passed from the prop
  // directly to keep the sync
  //   state = {
  //     value: this.props.counter.value,
  //     // tags: ["tag1", "tag2", "tag3"],
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // use arrow function to inherite 'this'
  //   handleIncrement = (product) => {
  //     // can not use this.state.count++, instead should use the built-in function which is inherited from Component
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // the reference of the method instead of calling the method
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button onClick={this.getDataFromAPI}>Get Data From Backend API</button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getDataFromAPI() {
    const url =
      "http://echo.jsontest.com/insert-key-here/insert-value-here/key/value";
    axios
      .get(url)
      .then(function (response) {
        const data = response.data;
        let output = `retrieved data from url: ${url}\n`;
        for (let k in data) {
          output += `key is ${k}, value is ${data[k]}\n`;
        }
        alert(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default Counter;
