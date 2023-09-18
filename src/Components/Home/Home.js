import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
  const [data, setData] = useState([]); 

  useEffect(() => {
  
    axios
      .get("http://localhost:5101/api/Employe/Getallemploye")
      .then((response) => {
      
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 
  console.log(data);



const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
          .delete(`http://localhost:5101/api/Employe/${id}`)
          .then((response) => {
              
              console.log(response.data);
             window.location.reload();
              
          })
          .catch((error) => {
          
              console.error(error);
          });
  }
};


  return (
    <>
      <Header />


      <div style={{ margin: '100px' }} >
        <h1>All Employes...</h1>
        <table className="table table-bordered table-striped-columns">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td> <Link to={`/Employedetails/${item.id}`}>Details</Link></td>
                <td><Link  onClick={() => handleDelete(item.id)}>Delete</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
