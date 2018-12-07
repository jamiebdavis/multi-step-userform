import React, { Component } from "react";
import UserDetails from "./UserDetails";
import ServiceDetails from "./ServiceDetails";
import Confirm from "./Confirm";
import Thanks from "./Thanks";
import AppBar from "material-ui/AppBar";

class UserForm extends Component {
  state = {
    page: 0,
    name: "",
    age: 0,
    email: "",
    phoneNumber: 0,
    phoneProvider: "",
    gasProvider: "",
    electricProvider: "",
    insuranceProvider: ""
  };

  render() {
    return (
      <div>
        <h1>UserForm</h1>

        <UserDetails
          page={this.state.page}
          name={this.state.pnameage}
          age={this.state.age}
          email={this.state.email}
        />

        <ServiceDetails />
        <Confirm />
        <Thanks />
      </div>
    );
  }
}

export default UserForm;
