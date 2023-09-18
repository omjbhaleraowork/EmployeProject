import "bootstrap/dist/css/bootstrap.min.css";
import Popup from 'reactjs-popup';
import { useState } from "react";
//import { json, useNavigate } from "react-router-dom";
import background from "../Assets/c2.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import RegistrationAlert from "../Alert/RegistrationAlert"


function RegistrationForm() {
  
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState(null); 
  const [Gender, setGender] = useState("");
  const [JobRole, setJobRole] = useState("Developer"); 
  const [Hobbies, setHobbies] = useState([]);
  const [register, setRegister] = useState(false);
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDateOfBirth = DateOfBirth.toISOString().split('T')[0];

    let data = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      DateOfBirth: formattedDateOfBirth,
      Gender: Gender,
      JobRole: JobRole,
      Hobbies: Hobbies,
    };
     data = JSON.stringify(data);
    console.log(data);
    axios.post("http://localhost:5101/api/Employe/PostEmploye",data,
     {headers: {
      "Content-Type": "application/json",
     }}
    )
    .then((response) => {
      console.log("Registration successful:", response.data);
      setRegister(true)
      
    })
    .catch((error) => {
      console.log(error);
    });

    // try {
    //   const response = axios.post(
    //     "http://localhost:5101/api/Employe/PostEmploye",
    //     data
    //   );
    //   console.log("Registration successful:", response.data);
    // } catch (error) {
    //   console.error("Error registering:", error);
    // }
  };
  
  const toggleHobby = (hobby) => {
    if (Hobbies.includes(hobby)) {
      // If the hobby is already in the string, remove it
      setHobbies(Hobbies.replace(`${hobby}, `, "").replace(`${hobby}`, ""));
    } else {
      // If the hobby is not in the string, add it
      setHobbies(`${Hobbies}${hobby}, `);
    }
  };
  
  const pageStyle1 = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const isFormValid = () => {
    return (
      FirstName !== "" &&
      LastName !== "" &&
      Email !== "" &&
      DateOfBirth !== null &&
      Gender !== "" &&
      JobRole !== "" &&
      Hobbies.length > 0
    );
  };

  return (
    <div style={pageStyle1}>
      <div className="container-fluid">
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <h1>Registration Form</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "20px",
            border: "5px solid black",
            marginBottom: "20px",
            padding: "20px",
          }}
          className="row g-3 needs-validation"
        >

          <div className="col-md-6">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              value={LastName}
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

        
          <div className="col-md-6">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="Email"
              value={Email}
              className="form-control"
              placeholder="xyz@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

        
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <DatePicker
              selected={DateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              type="date"
              className="form-control"
              dateFormat="yyyy-MM-dd"
              placeholderText="yyyy-MM-dd"
              required
            />
          </div>

         
          <div className="col-md-6">
            <label className="form-label">Select Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genderRadios"
                id="MaleRadio"
                value="Male"
                checked={Gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="MaleRadio">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genderRadios"
                id="FemaleRadio"
                value="Female"
                checked={Gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="FemaleRadio">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="genderRadios"
                id="OtherRadio"
                value="Other"
                checked={Gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="OtherRadio">
                Other
              </label>
            </div>
          </div>

        
          <div className="col-md-6">
            <label htmlFor="JobRole" className="form-label">
              Job Role
            </label>
            <select
              id="JobRole"
              className="form-select"
              value={JobRole}
              onChange={(e) => setJobRole(e.target.value)}
            >
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
              <option value="Support">Support</option>
            </select>
          </div>

          
       


<div className="col-md-6">
  <label className="form-label">Hobbies</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="SportsCheckbox"
      value="Sports"
      checked={Hobbies.includes("Sports")}
      onChange={(e) => toggleHobby("Sports")}
    />
    <label className="form-check-label" htmlFor="SportsCheckbox">
      Sports
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="CookingCheckbox"
      value="Cooking"
      checked={Hobbies.includes("Cooking")}
      onChange={(e) => toggleHobby("Cooking")}
    />
    <label className="form-check-label" htmlFor="CookingCheckbox">
      Cooking
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="ReadingCheckbox"
      value="Reading"
      checked={Hobbies.includes("Reading")}
      onChange={(e) => toggleHobby("Reading")}
    />
    <label className="form-check-label" htmlFor="ReadingCheckbox">
      Reading
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id="TravelingCheckbox"
      value="Traveling"
      checked={Hobbies.includes("Traveling")}
      onChange={(e) => toggleHobby("Traveling")}
    />
    <label className="form-check-label" htmlFor="TravelingCheckbox">
      Traveling
    </label>
  </div>
</div>



        <button
          style={{ width: "200px", marginLeft: "650px" }}
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid()}
        
        >
          Submit
        </button>

        {register ? (
                <RegistrationAlert/>
            ) :  ( 
                <p className="text-danger">You Are Not Registered</p>
            )}
      </form>
    </div>
  </div>
);
}

export default RegistrationForm;
