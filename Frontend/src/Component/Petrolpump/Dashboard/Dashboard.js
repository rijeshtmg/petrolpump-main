import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/ProductActions";
import DProductCard from "./DProductCard";
import Sales from "../Sales Report/SalesTable";
import "./Dashboard.css";
const Dashboard = ({ match }) => {
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);
  const [lists, setLists] = useState([]);
  const loadData = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API}/api/v2/admin/sales`
      );
      setLists(res.data.sales);
    } catch (error) {}
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Nav />
      <p className="ourProduct"> Our product</p>
      <div className="newSale-products">
        <div className="products">
          {products &&
            products.map((product) => (
              <DProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div>
        {" "}
        <p className="ourProduct"> Today Sales</p>
        <Sales lists={lists} />
      </div>
    </>
  );
};

export default Dashboard;
