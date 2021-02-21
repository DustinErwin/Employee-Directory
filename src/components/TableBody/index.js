import React from "react";
import TableRow from "../TableRow";

import "./style.css";
import fetchEmps from "../../utils/API";

class TableBody extends React.Component {
  state = {
    emps: [{ name: "nerd", email: "email", years: "years", phone: "0009090" }],
  };

  componentDidMount() {
    fetchEmps()
      .then((data) => {
        console.log(data);
        this.setState({ emps: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tbody className="table-body">
        {console.log(this.state.emps)}
        {this.state.emps.map((emp) => {
          return (
            <TableRow
              name={emp.name}
              email={emp.email}
              phone={emp.phone}
              years={emp.years}
            />
          );
        })}
      </tbody>
    );
  }
}
export default TableBody;
