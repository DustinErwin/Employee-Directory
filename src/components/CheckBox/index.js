import React from "react";
import "./style.css";

function CheckBox(props) {
  return (
    <>
      <input type="checkbox" className="checkbox"></input>
      <h4>{props.typeFilter}</h4>
    </>
  );
}

export default CheckBox;
