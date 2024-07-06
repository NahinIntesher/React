import React from "react";
import Login from "./Components/Login";
import "./App.css"; // Create this file for additional custom styles

function App() {
  return (
    <div className="bg-forest min-h-screen flex items-center  justify-center">
      <div className="p-8 rounded-lg shadow-lg text-white text-center bg-teal-900 border-2 border-white backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Employee Management System
        </h1>
        <Login />
      </div>
    </div>
  );
}

export default App;
