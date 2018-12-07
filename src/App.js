import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Typography from "material-ui/styles/typography";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar>
          <h1>Multi Step User Form</h1>
        </AppBar>
        <div className="App">
          <UserForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
