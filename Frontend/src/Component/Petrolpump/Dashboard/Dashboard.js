import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/ProductActions";
import DProductCard from "./DProductCard";
import Sales from "../Sales Report/SalesTable";
import "./Dashboard.css";
import BarGraph from "./BarGraph";
const Dashboard = ({ match }) => {
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match?.params?.keyword ?? "";

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);
  const [lists, setLists] = useState([]);
  const loadData = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API}/api/v2/admin/products`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data);
      setLists(res.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    loadData();
  }, []);
  const data = [
    { name: "January", value: 400 },
    { name: "February", value: 300 },
    { name: "March", value: 200 },
    { name: "April", value: 278 },
    { name: "May", value: 189 },
    { name: "June", value: 239 },
    { name: "July", value: 349 },
    { name: "August", value: 478 },
    { name: "September", value: 289 },
    { name: "October", value: 398 },
    { name: "November", value: 498 },
    { name: "December", value: 589 },
  ];

  return (
    <>
      <Nav />
      <p className="ourProduct"> Our product</p>

      <div className="newSale-products">
        <div className="products">
          {lists &&
            lists.map((product) => (
              <DProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <div className="ourProduct">Sales Chart</div>
          <div style={{ marginTop: "20px" }}>
            <LineChart width={670} height={500} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
        {/* <div>
          <div className="ourProduct">Stock Graph</div>
          <div>
            <BarGraph />
          </div>
        </div> */}
      </div>

      <div style={{ marginBottom: "50px" }}>
        {" "}
        <p className="ourProduct"> Today Sales</p>
        <Sales lists={lists} />
      </div>
    </>
  );
};

export default Dashboard;
