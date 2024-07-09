import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/adminLogin", info)
      .then((res) => {
        const { loginStatus } = res.data;
        if (loginStatus) {
          navigate("/dashboard");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-transparent p-6 text-[#ffff2d] border backdrop-blur-sm border-[#ffff2d] rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border-2 border-[#ffff2d] bg-transparent text-[#ffff2d] rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xl font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border-2 border-[#ffff2d] bg-transparent text-[#ffff2d] rounded-md focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffff2d] text-black text-xl py-2 rounded-md hover:bg-[#b3ff00] transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
