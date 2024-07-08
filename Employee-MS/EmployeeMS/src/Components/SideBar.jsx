import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBar = ({ handleLogout }) => {
  return (
    <div className="w-64 bg-gray-800  text-white flex flex-col border-2 border-indigo-900">
      <div className="flex flex-col items-center mt-6">
        <Link to="/dashboard" className="text-lg font-bold mb-4 text-white">
          Nahin
        </Link>
        <ul className="flex flex-col w-full gap-5">
          <li className="w-full">
            <Link
              to="/dashboard"
              className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
            >
              <i className="bi bi-speedometer2 text-lg mr-2"></i>
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/dashboard/employee"
              className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
            >
              <i className="bi bi-people text-lg mr-2"></i>
              <span className="hidden sm:inline">Manage Employees</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/dashboard/category"
              className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
            >
              <i className="bi bi-columns text-lg mr-2"></i>
              <span className="hidden sm:inline">Category</span>
            </Link>
          </li>
          <li className="w-full ">
            <Link
              to="/dashboard/profile"
              className="flex items-center py-2 px-4 text-white hover:bg-gray-700"
            >
              <i className="bi bi-person text-lg mr-2"></i>
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </li>
          <li className="w-full cursor-pointer  p-1 rounded-lg" onClick={handleLogout}>
            <div className="flex items-center py-2 px-4 text-white hover:bg-gray-700">
              <i className="bi bi-power text-lg mr-2"></i>
              <button className="hidden sm:inline ">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
