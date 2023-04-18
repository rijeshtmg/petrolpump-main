import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../../actions/ProductActions";
import { UPDATE_PRODUCT_RESET } from "../../../constans/ProductConstans";
import { ToastContainer, toast } from "react-toastify";
import "../AddProduct/AddProduct.css";
const UpdateProduct = ({ history, match }) => {
  const dispatch = useDispatch();

  const { error, product } = useSelector((state) => state.productDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteProduct);

  const [sn, setSn] = useState("");
  const [name, setName] = useState("");
  const [supprice, setSupprice] = useState(0);
  const [supplier, setSupplier] = useState(0);
  const [saleprice, setSaleprice] = useState(0);
  const [unit, setUnit] = useState(0);
  const [stock, setStock] = useState(0);
  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setSn(product.sn);
      setName(product.name);
      setSupprice(product.supprice);
      setSupplier(product.supplier);
      setSaleprice(product.saleprice);
      setUnit(product.unit);
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
      history.push("/manageproduct");
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

    myForm.set("sn", sn);
    myForm.set("name", name);
    myForm.set("supplier", supplier);
    myForm.set("supprice", supprice);
    myForm.set("saleprice", saleprice);
    myForm.set("unit", unit);
    myForm.set("stock", stock);

    dispatch(updateProduct(productId, myForm));
  };

  return (
    <Fragment>
      <div className="dashboard">
        <div className="newproductContainer">
          <form
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <div className="productDetails">
              <div className="productDetail">
                <div className="product-Data">
                  <h1>
                    S.N <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="number"
                    required
                    value={sn}
                    onChange={(e) => setSn(e.target.value)}
                  />{" "}
                </div>
                <div className="product-Data">
                  <h1>
                    Product Name <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />{" "}
                </div>
              </div>
              <div className="productDetail">
                <div className="product-Data">
                  <h1>
                    Supplier <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="text"
                    required
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                  />{" "}
                </div>
                <div className="product-Data">
                  <h1>
                    Unit <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="text"
                    required
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />{" "}
                </div>
              </div>
              <div className="productDetail">
                <div className="product-Data">
                  <h1>
                    Supplier Price <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="number"
                    required
                    value={supprice}
                    onChange={(e) => setSupprice(e.target.value)}
                  />{" "}
                </div>
                <div className="product-Data">
                  <h1>
                    Sale Price <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="number"
                    required
                    value={saleprice}
                    onChange={(e) => setSaleprice(e.target.value)}
                  />{" "}
                </div>
              </div>
              <div className="productDetail">
                <div className="product-Data" style={{ width: "390px" }}>
                  <h1>
                    Stock <span style={{ color: "red" }}>*</span> :
                  </h1>{" "}
                  <input
                    type="number"
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />{" "}
                </div>
              </div>
              <div className="saveButton">
                <button
                  className="savebtn"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  Save
                </button>
              </div>
            </div>
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

export default UpdateProduct;
