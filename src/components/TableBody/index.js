import React from "react";
import TableRow from "../TableRow";

import "./style.css";

let tableRows = [];
let initialize = false;

const initialTable = () => {
  for (let i = 0; i < 20; i++) {
    tableRows.push(<TableRow />);
  }
  initialize = true;
};

if (!initialize) {
  initialTable();
}
class TableBody extends React.Component {
  render() {
    return <tbody className="table-body">{tableRows}</tbody>;
  }
}
export default TableBody;
