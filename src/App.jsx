import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./App.css";
import About from "./Components/About";
import Logout from "./Components/Logout";
import DashBoard from "./NestLinks/DashBoard";
import Profile from "./NestLinks/Profile";
import Account from "./NestLinks/Account";
import NotFoundPage from "./NestLinks/NotFoundPage";


function App() {


  return (
    <div>
      <nav>
      <Link to ="/"> Home </Link> 
      <Link to ="/login"> Login</Link>
      <Link to ="/about"> About </Link>
      <Link to ="/logout">Logout</Link>
      <Link to ="/dashboard">DashBoard</Link>
      

      </nav>

      <Routes>
         <Route  path="/" element={<Home />} />
         <Route  path="/login" element={<Login />} />
         <Route  path="/about" element={<About />} />
         <Route  path="/logout" element={<Logout />} />
         <Route  path="/dashboard" element={<DashBoard />}>
         <Route  path="account" element={<Account />} />
         <Route  path="profile" element={<Profile />} />
         </Route>

         <Route  path="/not-found" element={< NotFoundPage/>} />
         <Route  path="*" element={<Navigate to='/not-found' />}/>
      </Routes>

    </div>
      
      
  );
}

export default App;




// import React from "react";
// import{Routes, Route, Link, Outlet, NavLink, Navigate} from 'react-router-dom';
// import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
// import Bundle from './Components/Bundle';
// import GettingStarted from './Components/GettingStarted'
// import Service from "./Components/Service";
// import SignUp from "./Components/SignUp";
// import Trial from "./Components/Trial";
// import Pronunciation from "./Components/Pages/Pronunciation";

// import './App.css'


// function App(){

//   return(
//     <>
//     <div >  
//          <nav id="Link">
//          <Link to ="/home" className = 'nav-item1'>Ekiti Virtual <br />
//             LEARNuING Hub</Link>
//          <Link to ="/aboutus" className = 'nav-item'>AboutUs</Link>
//          <Link to ="/search" className = 'nav-item1' >Search</Link>
//          <Link to ="/bundle" className = 'nav-item1' >Bundle</Link>
//          <Link to ="/service" className="nav-item">Service</Link>
//          <Link to ="/SignUp" className="nav-item">Sign Up</Link>
//          <Link to ="/Trial" className="nav-item">Start Free Trial</Link>
//          <Link to ="/gettingstarted" className="nav-item">Getting Started</Link>

//          </nav>

//         <Routes>
//          <Route  path="/home" element={<Home />} />
//          <Route  path="/aboutus" element={<AboutUs  />} />
//          <Route  path="/aboutus" element={<AboutUs  />} />
//          <Route  path="/bundle" element={<Bundle />} />
//          <Route  path="/service" element={<Service />} />
//          <Route  path="/signUp" element={<SignUp />} />
//          <Route  path="/trial" element={<Trial />} />
//          <Route  path="/gettingstarted" element={<GettingStarted />} />

//         </Routes>
//     </div>
//     <div>
//       <nav>
//       <Link to ="/pronunciation" className="nav-item">Pronunciation</Link>

//       </nav>
//       <Routes>
//       <Route  path="/pronunciation" element={<Pronunciation />} />

//       </Routes>
//     </div>


    
    

//     </>
    
//   )
  
// }

// export default App;


