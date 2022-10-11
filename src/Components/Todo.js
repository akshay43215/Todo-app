import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txtContent: "",
      items: [""],
    };
  }
  txtChange = (e) => {
    this.setState({ txtContent: e.target.value });
  };

  btnclick = (event) => {
    // alert('clicked');
    event.preventDefault();

    let currentText = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentText);
    this.setState({
      items: currentItems,
      txtContent: "",
    });
  };

  btnRemove(idx) {
    let currentItems = this.state.items;
    currentItems.splice(idx, 1);
    this.setState({ items: currentItems });
  }

  render() {
    console.log(this.state.items);
    const { items, txtContent } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.btnclick}>
          <div className="input-section">
            <h2>Todo App</h2>
            <input
              type="text"
              value={txtContent}
              placeholder="Enter Your Item Lists...... "
              onChange={this.txtChange}
            />
          </div>

          {/* <button onClick={this.btnclick} >Add</button> */}
        </form>
        <ul>
          {items.map((itm, k) => {
            return (
            <div className="li-div">
              <li key={k}>
                {itm}
                <button
                  onClick={() => {
                    this.btnRemove(k);
                  }}
                >
                  
                  Delete
                </button>
              </li>
            </div>
            );
          })}
        </ul>
        <p>{this.state.txtContent}</p>
      </div>
    );
  }
}

export default Todo;
