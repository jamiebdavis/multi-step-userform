import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import SimpleAppBar from "./components/AppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <UserForm />
      </div>
    );
  }
}

export default App;
