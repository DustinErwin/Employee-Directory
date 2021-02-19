import React from "react";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import "./style.css";

function Table() {
  return (
    <div className="table">
      <h1>Employees</h1>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
