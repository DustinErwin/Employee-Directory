import React from "react";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import "./style.css";

function Table({ search }) {
  return (
    <div className="table">
      <h1>Employees</h1>
      <table>
        <TableHeader />
        <TableBody search={search} />
      </table>
    </div>
  );
}

export default Table;
