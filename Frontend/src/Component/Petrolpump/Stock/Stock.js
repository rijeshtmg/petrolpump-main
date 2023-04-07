import React, { Fragment, useEffect } from "react";
import "./Stock.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct } from "../../../actions/ProductActions";
import EditIcon from "@material-ui/icons/Edit";
// import { Button } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Navbar/Nav";

const Stock = ({ history }) => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, history]);
  const columns = [
    { field: "sn", headerName: "S.N", minWidth: 50, flex: 0.35 },

    {
      field: "name",
      headerName: "Product Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "supprice",
      headerName: "Supplier price",
      type: "string",
      minWidth: 150,
      flex: 0.45,
    },
    {
      field: "saleprice",
      headerName: "Sale price",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "string",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            {/* <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button> */}
          </Fragment>
        );
      },
    },
  ];
  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        sn: item.sn,
        supprice: item.supprice,
        saleprice: item.saleprice,
        stock: item.stock,
        name: item.name,
      });
    });

  return (
    <>
      <Nav />
      <h1 className="stockReport-Title"> Stock Report</h1>
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

export default Stock;
