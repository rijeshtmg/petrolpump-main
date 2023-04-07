import React from "react";
import "./Productcard.css";

const ProductCard = ({ product, setType, type }) => {
  return (
    <>
      <div className="ProductCard">
        <input
          type="checkbox"
          checked={product.name == type?.name}
          onChange={(e) => {
            if (e.target.checked) {
              setType(product);
            }
          }}
        />
        <p className="productName">{product.name}</p>
        <div>
          <div className="price">
            <span className="s__Price">{`Rs.${product.saleprice}/Ltr`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
