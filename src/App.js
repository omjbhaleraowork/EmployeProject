
import './App.css';

import { BrowserRouter , Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/FormComponents/RegistrationForm"
import Home from  "./Components/Home/Home"
import RegistrationAlert from './Components/Alert/RegistrationAlert';
import EmployeDetails from './Components/EmployeDetails/EmployeDetails';
import UpdateEmploye from './Components/Update/UpdateEmploye';
function App() {
  return (
    <>
      
    <BrowserRouter>
    
    <Routes>


    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Registrationform" element={<RegistrationForm/>}/>
    <Route exact path="/alert" element={<RegistrationAlert/>}/>
    <Route path="/Employedetails/:id" element={<EmployeDetails />} />
    <Route path="/UpdateEmploye/:id" element={<UpdateEmploye />} />




    </Routes>
    
    
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
