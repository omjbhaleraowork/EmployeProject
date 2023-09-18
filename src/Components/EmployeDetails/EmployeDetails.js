// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function EmployeDetails() {
//   const [data, setData] = useState([]); // State to store the fetched data
//   const { id } = useParams();
//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     axios.get(`http://localhost:5101/api/Employe/${id}`)

//       .then((response) => {
//         // Set the fetched data in the state
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]); // Empty dependency array ensures that this effect runs once when the component mounts
//   console.log(data);
//   return (
//     <>
//       <Header />
//       <div style={{ margin: '100px' }} >
//         <table class="table table-bordered table-striped-columns">
//           <thead>
//             <tr>
//               <th scope="col">#ID</th>
//               <th scope="col">FirstName</th>
//               <th scope="col">LastName</th>
//               <th scope="col">Email</th>
//               <th scope="col">Date Of Birth</th>
//               <th scope="col">Gender</th>
//               <th scope="col">Job Role</th>
//               <th scope="col">Hobbies</th>


//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <th scope="row">{item.id}</th>
//                 <td>{item.firstName}</td>
//                 <td>{item.lastName}</td>
//                 <td>{item.email}</td>
//                 <td>{item.dateOfBirth}</td>
//                 <td>{item.gender}</td>
//                 <td>{item.jobRole}</td>
//                 <td>{item.hobbies}</td>
               
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default EmployeDetails;



import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EmployeDetails() {
  const [employee, setEmployee] = useState(null);


  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get(`http://localhost:5101/api/Employe/${id}`)
      .then((response) => {
        // Set the fetched data in the state
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); // Include "id" in the dependency array to re-fetch data when the ID changes

  return (
    <>
      <Header />
      <div style={{ margin: "100px" }}>
        <h1>Employee Details...</h1>
        {employee ? (
          <table className="table table-success table-striped-columns">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Gender</th>
                <th scope="col">Job Role</th>
                <th scope="col">Hobbies</th>
                <th scope="col">Actions</th> {/* Add Actions column */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.gender}</td>
                <td>{employee.jobRole}</td>
                <td>{employee.hobbies}</td>
                <td>
                  <Link to={`/UpdateEmploye/${employee.id}`}>Edit</Link> 
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </>
  );
}

export default EmployeDetails;




// import React, { useState, useEffect } from "react";
// import Header from "../Header/Header";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function EmployeDetails() {
//   const [data, setData] = useState(null); // State to store the fetched data
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//    axios.get(`http://localhost:5101/api/Employe/${id}`)
//       .then((response) => {
//         // Set the fetched data in the state
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]); // Include "id" in the dependency array to re-fetch data when the ID changes

//   return (
//     <>
//       <Header />
//       <div style={{ margin: '100px' }} >
//         {data ? (
//           <table className="table table-bordered table-striped-columns">
//             <thead>
//               <tr>
//                 <th scope="col">#ID</th>
//                 <th scope="col">FirstName</th>
//                 <th scope="col">LastName</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Date Of Birth</th>
//                 <th scope="col">Gender</th>
//                 <th scope="col">Job Role</th>
//                 <th scope="col">Hobbies</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">{data.id}</th>
//                 <td>{data.firstName}</td>
//                 <td>{data.lastName}</td>
//                 <td>{data.email}</td>
//                 <td>{data.dateOfBirth}</td>
//                 <td>{data.gender}</td>
//                 <td>{data.jobRole}</td>
//                 <td>{data.hobbies}</td>
//               </tr>
//             </tbody>
//           </table>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default EmployeDetails;
