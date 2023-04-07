import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <>
      {typeof token != 'undefined' ? (
        <Route
          {...rest}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      ) : (
        <Redirect to={'/'} />
      )}
    </>
  );
};

export default ProtectedRoute;
