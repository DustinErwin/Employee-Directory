import axios from "axios";

export default function fetchEmps() {
  return axios.get("https://randomuser.me/api/?results=50").then((res) => {
    const emps = res.data.results;
    return emps.map((emp) => {
      return {
        name: `${emp.name.first} ${emp.name.last}`,
        email: emp.email,
        years: emp.registered.age,
        phone: emp.phone,
      };
    });
  });
}
