import React, { useState } from "react";
import axios from "axios";
export default function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminLogin", info)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" max-w-md mx-auto text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center  ">Login Form</h2>
      <form action="" className="bg-teal-900 p-6 rounded-lg backdrop-blur-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-white bg-teal-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-XL font-medium  mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 border border-white  bg-transparent text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black text-xl py-2 rounded-md hover:bg-[#ffffdb] transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
