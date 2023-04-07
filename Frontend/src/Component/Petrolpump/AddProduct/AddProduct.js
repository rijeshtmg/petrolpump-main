import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createProduct } from "../../../actions/ProductActions";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NEW_PRODUCT_RESET } from "../../../constans/ProductConstans";
import "./AddProduct.css";
import Nav from "../Navbar/Nav";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.createProduct
  );

  const history = useHistory();

  const [sn, setSn] = useState("");
  const [name, setName] = useState("");
  const [supprice, setSupprice] = useState(0);
  const [supplier, setSupplier] = useState("");
  const [saleprice, setSaleprice] = useState(0);
  const [unit, setUnit] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Product Created Successfully");
      history.push("/manageproduct");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, history]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("sn", sn);
    myForm.set("name", name);
    myForm.set("supplier", supplier);
    myForm.set("supprice", supprice);
    myForm.set("saleprice", saleprice);
    myForm.set("unit", unit);
    myForm.set("stock", stock);

    dispatch(createProduct(myForm));
  };

  return (
    <>
      <div className="addProduct">
        <Nav />
        <h1 className="addProduct-pageTitle">Add Product</h1>
        <form
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
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

export default AddProduct;
