// ProtectedRoute.js
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Check authentication status
  fetch('http://localhost:3000/isAuthenticated', {
    method: 'GET',
    credentials: 'include', // Ensure credentials are included
  }).then(async (res) => {
  
    const { isloggedIn } = result.data;

    if(isloggedIn){
      console.log("User is authenticated");
    }
    else{
      console.log("User is not authenticated");
    }
    // console.log(isloggedIn);
    // if (!isloggedIn) {
    //   navigate("/");
    // }
  });

  // return <>{children}</>;
};

export default ProtectedRoute;
