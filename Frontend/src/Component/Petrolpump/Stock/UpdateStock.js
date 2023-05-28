import { Fragment, useEffect, useState } from "react";
//import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../../actions/ProductActions";
import { Button } from "@material-ui/core";

import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee"; // eslint-disable-next-line

import { UPDATE_PRODUCT_RESET } from "../../../constans/ProductConstans";
import { ToastContainer, toast } from "react-toastify";

const UpdateStock = ({ history, match }) => {
  const dispatch = useDispatch();

  const { error, product } = useSelector((state) => state.productDetails);
  console.log(product);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteProduct);

  const [name, setName] = useState("");
  const [saleprice, setPrice] = useState("");
  const [supprice, setSupPrice] = useState("");
  const [sn, setSN] = useState("");

  const [stock, setStock] = useState("");

  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setSN(product.sn);
      setName(product.name);
      setPrice(product.saleprice);
      setSupPrice(product.supprice);
      setStock(product.stock);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Product Updated Successfully");
      history.push("/stock");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("Sn", sn);
    myForm.set("SupPrice", supprice);
    myForm.set("SalePrice", saleprice);
    myForm.set("Stock", stock);
    myForm.set("Name", name);

    dispatch(updateProduct(productId, myForm));
  };

  return (
    <Fragment>
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Edit Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={sn}
                onChange={(e) => setSN(e.target.value)}
              />
            </div>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <CurrencyRupee />
              <input
                type="number"
                placeholder="Product Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={saleprice}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={supprice}
                onChange={(e) => setSupPrice(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                value={stock}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
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

export default UpdateStock;
