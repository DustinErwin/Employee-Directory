// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [emp, setEmp] = useState({
//     name: "",
//     email: "",
//     years: "",
//     phone: "",
//     pic: "",
//   });

//   const fetchThis = () =>
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setEmp({
//           ...emp,
//           name: `${data.results[0].name.first} ${data.results[0].name.last}`,
//           email: data.results[0].email,
//           years: data.results[0].registered.age,
//           phone: data.results[0].phone,
//           pic: data.results[0].picture.large,
//         });
//       });

//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={emp.name} src={emp.pic} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {emp.name}
//           </li>
//           <li>
//             <strong>Email:</strong> {emp.email}
//           </li>
//           <li>
//             <strong>Phone:</strong> {emp.phone}
//           </li>
//           <li>
//             <strong>Years Employed Here:</strong> {emp.years}
//           </li>
//         </ul>
//       </div>
//       <button onClick={fetchThis}>Click Me!</button>
//       <span onClick={() => emp.removeFriend(emp.id)} className="remove">
//         𝘅
//       </span>
//     </div>
//   );
