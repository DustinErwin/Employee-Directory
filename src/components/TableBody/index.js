import React, { useState, useEffect } from "react";
import TableRow from "../TableRow";

import "./style.css";
import fetchEmps from "../../utils/API";

export default function TableBody(props) {
  const [state, setState] = useState({
    emps: [{ name: "nerd", email: "email", years: "years", phone: "0009090" }],
  });

  useEffect(() => {
    fetchEmps()
      .then((data) => {
        setState({ emps: data });
      })
      .catch((err) => console.log(err));
  }, []);

  //  searchEmps(props.search){

  //  }

  return (
    <tbody className="table-body">
      {state.emps.map((emp) => {
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
