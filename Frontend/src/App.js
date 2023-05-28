import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./globalstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Component/Petrolpump/Dashboard/Dashboard";
import Pos from "./Component/Petrolpump/POS/Pos";
import NewSale from "./Component/Petrolpump/NewSale/NewSale";
import AddProduct from "./Component/Petrolpump/AddProduct/AddProduct";
import SalesReport from "./Component/Petrolpump/Sales Report/SalesReport";
import ManageProduct from "./Component/Petrolpump/Manage Product/ManageProduct";
import AddPurchase from "./Component/Petrolpump/Add Purchase/AddPurchase";
import PurchaseReport from "./Component/Petrolpump/Purchase Report/PurchaseReport";
import Stock from "./Component/Petrolpump/Stock/Stock";
import LoginSignup from "./Component/Login/Loginsignup";
import Home from "./Component/Customer/Home/Home";
import axios from "axios";
import Statement from "./Component/Customer/Statement/Statement";
import Purchase from "./Component/Customer/Purchase/Purchase";
import Profile from "./Component/Profile/Profile";
import AllUsers from "./Component/Admin/AllUser/Alluser";
import ProtectedRoute from "./Route/ProtectedRoute";
import PumpCard from "./Component/Customer/Home/PumpCard";
import EditProfile from "./Component/Edit Profile/EditProfile";
import UpdateUser from "./Component/Admin/Edit Role/Updateuser";
import ChangePassword from "./Component/Change Password/ChangePassword";
import UpdateProduct from "./Component/Petrolpump/Edit Product/Editproduct";
import ForgotPassword from "./Component/Forgotpassword/Forgotpassword";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import UpdateStock from "./Component/Petrolpump/Stock/UpdateStock";
import SuperAdminRoute from "./Route/SuperAdminRoute";
import ProtectedUserRoute from "./Route/AdminRoute";

function App() {
  return (
    <Router>
      <div className="body">
        <Switch>
          <Route exact path="/" component={LoginSignup} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute isAdmin={true} exact path="/Pos" component={Pos} />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/newsale"
            component={NewSale}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/stock"
            component={Stock}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/addproduct"
            component={AddProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/salesreport"
            component={SalesReport}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/manageproduct"
            component={ManageProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/addpurchase"
            component={AddPurchase}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/purchasereport"
            component={PurchaseReport}
          />
          <ProtectedUserRoute exact path="/userHome" component={Home} />
          <ProtectedUserRoute exact path="/statement" component={Statement} />
          <Route exact path="/product/:id" component={UpdateProduct} />
          <Route
            //isAdmin={true}
            exact
            path="/stockup/:id"
            component={UpdateStock}
          />
          <Route
            //isAdmin={true}
            exact
            path="/admin/user/:id"
            component={UpdateUser}
          />

          <SuperAdminRoute exact path="/users" component={AllUsers} />
          <ProtectedUserRoute exact path="/purchase" component={Purchase} />
          <Route exact path="/pump" component={PumpCard} />

          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/editprofile" component={EditProfile} />
          <Route exact path="/password/forgot" component={ForgotPassword} />
          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />

          <ProtectedRoute
            exact
            path="/changepassword"
            component={ChangePassword}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
