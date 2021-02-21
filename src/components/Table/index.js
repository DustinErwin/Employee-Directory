import React from "react";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import "./style.css";

function Table(props) {
  return (
    <div className="table">
      <h1>Employees</h1>
      <table>
        <TableHeader />
        <TableBody search={props.search} />
      </table>
    </div>
  );
}

export default Table;
