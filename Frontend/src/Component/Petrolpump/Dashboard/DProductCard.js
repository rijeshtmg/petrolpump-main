import React from "react";
import "./DProductCard.css";
const DProductCard = ({ product }) => {
  return (
    <>
      <div className="DProductCard">
        <p className="productName">{product.name}</p>
        <div className="stock">{`Stock: ${product.stock}`}</div>
        <div>
          <div className="price">
            <span className="s_Price">{`Price: Rs.${product.saleprice}/Ltr`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DProductCard;
