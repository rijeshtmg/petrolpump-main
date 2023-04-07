import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../../actions/ProductActions";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DELETE_PRODUCT_RESET } from "../../../constans/ProductConstans";
import "./ManageProduct.css";
import NavBar from "../Navbar/Nav";

const ManageProduct = ({ history }) => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      //alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, isDeleted, deleteError, history]);

  const columns = [
    { field: "sn", headerName: "S.N", minWidth: 50, flex: 0.35 },

    {
      field: "name",
      headerName: "Product Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      type: "string",
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
      field: "unit",
      headerName: "Unit",
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

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
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
        supplier: item.supplier,
        supprice: item.supprice,
        saleprice: item.saleprice,
        unit: item.unit,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <NavBar />
      <div className="manageProduct-head">
        <h1 className="manageProduct-Title"> Product List</h1>
        <Link to="/addproduct">
          {" "}
          <button className="addProductBtn">Add Product</button>
        </Link>
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
    </Fragment>
  );
};

export default ManageProduct;
