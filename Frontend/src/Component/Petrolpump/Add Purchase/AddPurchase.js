import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createPurchase } from "../../../actions/PurchaseAction";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NEW_PURCHASE_RESET } from "../../../constans/PurchaseConstans";
import { useHistory } from "react-router-dom";
import "./AddPurchase.css";
import Nav from "../Navbar/Nav";

const AddPurchase = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.createPurchase
  );

  const history = useHistory();

  const [sn, setSn] = useState("");
  const [name, setName] = useState("");
  const [supprice, setSupprice] = useState(0);
  const [supplier, setSupplier] = useState("");
  const [stock, setStock] = useState(1);
  const [totalamount, setTotalamount] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Purchase Created Successfully");
      history.push("/purchasereport");
      dispatch({ type: NEW_PURCHASE_RESET });
    }
  }, [dispatch, error, success, history]);

  const createPurchaseSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("sn", sn);
    myForm.set("name", name);
    myForm.set("supplier", supplier);
    myForm.set("supprice", supprice);
    myForm.set("stock", stock);
    myForm.set("totalamount", totalamount);

    dispatch(createPurchase(myForm));
  };

  return (
    <>
      <Nav />
      <div className="addPurchase">
        <h1 className="addPurchase-pageTitle">Add Purchase</h1>
        <form
          encType="multipart/form-data"
          onSubmit={createPurchaseSubmitHandler}
        >
          <div className="purchaseDetails">
            <div className="purchaseDetail">
              <div className="purchase-Data">
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
              <div className="purchase-Data">
                <h1>
                  Product Name <span style={{ color: "red" }}>*</span> :
                </h1>{" "}
                <input
                  type="string"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="purchaseDetail">
              <div className="purchase-Data">
                <h1>
                  Supplier Name <span style={{ color: "red" }}>*</span> :
                </h1>{" "}
                <input
                  type="string"
                  required
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                />{" "}
              </div>
              <div className="purchase-Data">
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
            </div>
            <div className="purchaseDetail">
              <div className="purchase-Data">
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
              <div className="purchase-Data">
                <h1>
                  Total Amount <span style={{ color: "red" }}>*</span> :
                </h1>{" "}
                <input
                  type="number"
                  required
                  value={totalamount}
                  onChange={(e) => setTotalamount(e.target.value)}
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

export default AddPurchase;
