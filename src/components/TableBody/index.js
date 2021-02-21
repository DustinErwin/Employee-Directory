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
        this.setState({ emps: data });
      })
      .catch((err) => console.log(err));
  }

  // function filterResults(){
  //   this.state.emps.inculdes(props.search)
  // }

  render() {
    return (
      <tbody className="table-body">
        {this.state.emps.map((emp) => {
          return (
            <TableRow
              key={emp.name}
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
