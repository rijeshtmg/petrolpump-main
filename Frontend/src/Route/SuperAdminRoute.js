import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const SuperAdminRoute = ({ isAdmin, user, component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log(user, "user");
  if (!token) {
    return (
      <>
        <Redirect to={"/"} />
      </>
    );
  }
  if (user?.role != "superadmin") {
    return <Redirect to={"/"} />;
  }
  return (
    <>
      <Component {...rest} />
    </>
  );
};

export default SuperAdminRoute;
