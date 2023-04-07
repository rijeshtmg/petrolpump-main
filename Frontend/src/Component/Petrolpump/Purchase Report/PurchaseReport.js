import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminPurchase } from "../../../actions/PurchaseAction";
import { ToastContainer } from "react-toastify";
import "../Manage Product/ManageProduct";
import "./PurchaseReport.css";
import NavBar from "../Navbar/Nav";
const PurchaseReport = () => {
  const dispatch = useDispatch();

  const { error, purchases } = useSelector((state) => state.purchases);

  useEffect(() => {
    if (error) {
      //alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminPurchase());
  }, [dispatch, error]);

  const columns = [
    { field: "sn", headerName: "S.N", minWidth: 20, flex: 0.4 },

    {
      field: "name",
      headerName: "Product Name",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      type: "string",
      minWidth: 90,
      flex: 0.6,
    },

    {
      field: "supprice",
      headerName: "Price",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock ",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "totalamount",
      headerName: "Total Amount",
      type: "string",
      minWidth: 80,
      flex: 0.7,
    },
    {
      field: "createAt",
      headerName: "Purchase Date",
      type: "date",
      minWidth: 100,
      flex: 0.7,
    },
  ];

  const rows = [];

  purchases &&
    purchases.forEach((item) => {
      rows.push({
        id: item._id,
        sn: item.sn,
        supplier: item.supplier,
        supprice: item.supprice,
        stock: item.stock,
        totalamount: item.totalamount,
        name: item.name,
        createAt: item.createAt.slice(0,10),
      });
    });

  return (
    <>
      <NavBar />
      <h1 className="purchaseReport-Title"> Purchase Report</h1>
      <div className="purchaseReport-dataSearch">
        <div className="purchaseReport-data">
          <h1>Start Date:</h1> <input />{" "}
        </div>
        <div className="purchaseReport-data">
          <h1>End Date:</h1> <input />{" "}
        </div>
        <button className="searchBtn">Search</button>
      </div>
      <div className="dashboard">
        <div className="productListContainer">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default PurchaseReport;
