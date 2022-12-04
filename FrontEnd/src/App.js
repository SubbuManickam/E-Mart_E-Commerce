import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
// import Home from "./pages/Home";
// import Contact from "./Contact/Contact";
// import About from "./About/AboutUs";
// import Jobs from "./Jobs/Jobs";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              {/* <Route path="/Home.js" element={<Home/>} /> */}
              {/* <Route path="/Jobs.js" element={<Jobs/>} /> */}
              {/* <Route path="/Contact.js" element={<Contact/>} /> */}
              {/* <Route path="/About.js" element={<About/>} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
