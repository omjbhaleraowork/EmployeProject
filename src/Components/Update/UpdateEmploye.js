import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
//import EmployeDetails from "../EmployeDetails/EmployeDetails";
import UpdateAlert from "../Alert/UpdateAlert";

function UpdateEmploye() {
  const { id } = useParams();
  const [update, setUpdate] = useState(false);
  const [employe, setEmploye] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    jobRole: "",
    hobbies: "",
  });

  useEffect(() => {
   
    axios
      .get(`http://localhost:5101/api/Employe/${id}`)
      .then((response) => {
        const formattedDate = new Date(response.data.dateOfBirth).toISOString().split("T")[0];
        setEmploye({
          ...response.data,
          dateOfBirth: formattedDate,
        });
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmploye({
      ...employe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5101/api/Employe/${employe.id}`, employe)
      .then((response) => {
        console.log("Employe updated successfully.");
        setUpdate(true)
      })
      .catch((error) => {
        console.error("Error updating employe:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="mb-4">Update Employe</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Employe ID:</label>
            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={employe.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={employe.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={employe.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={employe.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={employe.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={employe.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobRole">Job Role:</label>
            <input
              type="text"
              className="form-control"
              id="jobRole"
              name="jobRole"
              value={employe.jobRole}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Hobbies:</label>
            <input
              type="text"
              className="form-control"
              id="hobbies"
              name="hobbies"
              value={employe.hobbies}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Employee
          </button>
          { update ? (
            <UpdateAlert/>
          ) : (
                <p className="text-danger">Update Employe</p>

          )

          }

        </form>
      </div>
    </>
  );
}

export default UpdateEmploye;
