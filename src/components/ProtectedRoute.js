import React from "react";
import { Navigate } from "react-router-dom";
import { useHistory } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  const navigate = useHistory()

  console.log("Check user in Private: ", user);
  if (!user) {
    return navigate.push('/');
  }
  return children;
};

export default ProtectedRoute;
