import React, { useEffect, useState } from "react";
import "./style.css";

function TableRow() {
  const [emp, setEmp] = useState({
    name: "",
    email: "",
    years: "",
    phone: "",
    pic: "",
  });

  const fetchThis = () =>
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setEmp({
          ...emp,
          name: `${data.results[0].name.first} ${data.results[0].name.last}`,
          email: data.results[0].email,
          years: data.results[0].registered.age,
          phone: data.results[0].phone,
          pic: data.results[0].picture.large,
        });
      });
  useEffect(() => {
    fetchThis();
  }, []);

  return (
    <tr className="table-row" key={emp.name}>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.phone}</td>
      <td>{emp.years}</td>
    </tr>
  );
}

export default TableRow;
