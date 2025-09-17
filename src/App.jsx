import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import UserData from "./pages/User.jsx";
import './App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mainBody">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/users" element={<UserData/>}/>
          <Route path="*" element={<h1>404 Page not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
