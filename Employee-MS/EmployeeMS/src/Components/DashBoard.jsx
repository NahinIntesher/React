import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";
import Home from "./Home";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get("http://localhost:3000/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex h-screen w-screen gap-0">
      <SideBar handleLogout={handleLogout} />
      <div className="flex-1 flex flex-col bg-transparent backdrop-blur-lg border-2 border-indigo-900">
        <div className="flex text-white justify-center shadow-md p-4 bg-gray-800">
          <h4>Employee Management System</h4>
        </div>
        <div className="flex-1 p-4">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
