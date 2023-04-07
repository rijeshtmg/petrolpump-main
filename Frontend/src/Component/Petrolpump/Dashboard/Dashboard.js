import React, { useEffect } from "react";
import Nav from "../Navbar/Nav";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/ProductActions";
import DProductCard from "./DProductCard";
import "./Dashboard.css";
const Dashboard = ({match}) => {
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);
  return (
    <>
      <Nav />
      <p className="ourProduct"> Our product</p>
      <div className="newSale-products">
        <div className="products">
          {products &&
            products.map((product) => (
              <DProductCard  key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
