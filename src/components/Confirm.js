import React from "react";

//page: 0,
//name: "",
//age: 0,
//email: "",
//phoneNumber: 0,
//phoneProvider: "",
//gasProvider: "",
//electricProvider: "",
//insuranceProvider: ""

const Confirm = props => {
  return (
    <div>
      <p>Please confirm your details below</p>
      <ul>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
        <li>{props.name}</li>
      </ul>
    </div>
  );
};

export default Confirm;
