import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Auth/SignUp";
import Login from "./Auth/Login";
import QuizApp from "./Quiz/QuizApp";
import "./Auth/App.css";
import SignUp from "./Auth/SignUp";
import Resultpage from "./Quiz/Resultpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Register />} /> {/* 👈 Default route */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/QuizApp" element={<QuizApp />} />
          <Route path="/result" element={<Resultpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
