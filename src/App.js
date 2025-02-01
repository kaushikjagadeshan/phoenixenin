import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import "./components/Navbar/Navbar.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;