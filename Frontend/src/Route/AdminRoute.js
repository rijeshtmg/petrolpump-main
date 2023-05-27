import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedUserRoute = ({ user, component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <>
        <Redirect to={"/"} />
      </>
    );
  }
  if (user?.role !== "user") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Component {...rest} />
    </>
  );
};

export default ProtectedUserRoute;
