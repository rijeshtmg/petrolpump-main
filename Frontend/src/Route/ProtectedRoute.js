import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useUser } from "../context/useUser";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const { user } = useUser();
  if (!token) {
    return (
      <>
        <Redirect to={"/"} />
      </>
    );
  }

  return (
    <>
      <Component {...rest} />
    </>
  );
};

export default ProtectedRoute;
