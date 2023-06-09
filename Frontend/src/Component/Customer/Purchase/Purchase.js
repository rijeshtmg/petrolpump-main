import React, { useState, useEffect } from "react";
import "./Purchase.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/ProductActions";
import CNav from "../CNav/CNav";
import ProductCard from "../../Petrolpump/ProductCard/ProductCard";
import PurchaseTable from "./PurchaseTable";
import axios from "axios";
import { toast } from "react-toastify";
const Purchase = ({ match }) => {
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    name: "",
    quantity: 0,
  });
  const [price, setPrice] = useState(0);
  const [type, setType] = useState({});

  const handleSubmit = async () => {
    setList([
      ...list,
      {
        product: type?.name,
        amount: price,
        quantity: data.quantity,
        rate: type?.saleprice,
      },
    ]);
  };

  const handleBill = async (e) => {
    console.log("call");
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/v2/user/userpurchase`,
        {
          name: type?.user?.name,
          list: list,
          total: total,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.success("success");
      setTimeout(() => {
        window.location.reload();
      }, 200);
    } catch (error) {
      toast.error("error");
    }
  };

  const handleChange = (type) => (e) => {
    setData({ ...data, [type]: e.target.value });
  };
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match?.params?.keyword ?? "";

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);

  useEffect(() => {
    let temp = (type?.saleprice || 0) * (data.quantity || 0);
    setPrice(temp);
  }, [data.quantity, type]);

  useEffect(() => {
    let gt = list.reduce((initial, final) => {
      return initial + (parseInt(final?.amount) || 0);
    }, 0);
    setTotal(gt);
  }, [list]);

  const [] = useState("");
  return (
    <div className="newSale">
      <CNav />
      <h1 className="newSale-pageTitle" style={{ width: "120px" }}>
        New Purchase
      </h1>
      <p className="selectProduct"> Select a product</p>
      <div className="newSale-products">
        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard
                type={type}
                key={product.id}
                product={product}
                setType={setType}
              />
            ))}
        </div>
      </div>
      <div className="newSale-details">
        <div className="newSale-detail">
          <div className="newSale-data newSale-data-petrolpump">
            <h1>Petrolpump Name:</h1>{" "}
            <input value={type?.user?.name} readOnly />
          </div>
        </div>
        <div className="newSale-detail">
          <div className="newSale-data">
            <h1>Quantity in Ltr:</h1>{" "}
            <input
              onChange={handleChange("quantity")}
              value={data.quantity}
              type="number"
            />
          </div>
          <div className="newSale-data">
            <h1>Amount:</h1> <input placeholder={price} readOnly />
          </div>
          <div>
            <button
              className="submitBtn"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="sale-Data">
        <PurchaseTable list={list} />
        <div className="billBtn">
          <div className="d-flex">
            <h1 className="mt-2 text-align-center">Grand Total</h1>
            <input
              className="ms-2 mb-3 me-2"
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
                height: "40px",
              }}
              readOnly
              value={total}
            />
          </div>
          <button onClick={handleBill} style={{ marginRight: "80px" }}>
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
