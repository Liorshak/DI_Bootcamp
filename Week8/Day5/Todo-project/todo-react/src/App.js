import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AddBar from "./components/AddBar";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoArr: [],
      text: "",
    };
  }

  removeTask = (id) => {
    console.log("id", id);
    let todoArrUpdate = [...this.state.todoArr];
    todoArrUpdate.splice(id, 1);
    this.setState({ todoArr: todoArrUpdate });
  };

  addTask = (event) => {
    console.log("addtask", event);
    if (event.key == "Enter") {
      let txt = this.state.text;
      this.setState({
        todoArr: [...this.state.todoArr, txt],
      });
      this.setState({ text: "" });
      event.target.value = "";
    } else {
      console.log("addValue", event);
      console.log(this.state.text);
      this.setState({ text: event.target.value });
    }
  };

  // addValue = (event) => {

  // };

  render() {
    return (
      <div className="app flex flex-column items-center justify-center bg-light-grey">
        <h1 className="light-blue shadow f1">Todo's</h1>
        <TodoList todoArr={this.state.todoArr} removeTask={this.removeTask} />
        <AddBar addTask={this.addTask} addValue={this.addValue} />
      </div>
    );
  }
}

export default App;
