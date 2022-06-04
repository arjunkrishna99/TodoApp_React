import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handlechange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  //   deleteItem=(index)=>{
  //       console.log(index);
  //       const allItems=this.state.items;//inorder to pull the array
  //       allItems.splice(index,1);
  //       this.setState({
  //           items: allItems
  //       })

  //   }

  // *advanced method for the deletion
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };
  // clear all function
  allClear = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1 className="header">Todo-App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handlechange}
            placeholder="Enter todo"
          />
        </form>
        <ul>
          {items.map((data, index) => {
            return (
              <li key={index}>
                {data}

                
                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </li>
            );
          })}
        </ul>
        <button className="clear-all" onClick={this.allClear}>
          <b>Clear All</b>
        </button>
      </div>
    );
  }
}

export default TodoApp;
