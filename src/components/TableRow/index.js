import React, { useEffect, useState } from "react";
import "./style.css";

function TableRow(props) {
  return (
    <tr className="table-row">
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.years}</td>
    </tr>
  );
}

export default TableRow;
