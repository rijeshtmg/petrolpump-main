import React from "react";
import CNav from "../CNav/CNav";
import "./Purchase.css";
const Purchase = () => {
  return (
    <>
      <CNav />
      <h1 className="purchase-pageTitle">New Purchase</h1>
      <p className="selectProduct"> Select a product</p>
      <div className="purchase-products">
        <div className="purchase-product">
          <h5>Petrol</h5> <p>Rs 182/Ltr</p>{" "}
        </div>
        <div className="purchase-product">
          <h5>Diesel</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
        <div className="purchase-product">
          <h5>Kerosene</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
      </div>
      <div className="purchase-details">
        <div className="purchase-detail">
          <div className="purchase-data purchase-data-Customer">
            <h1>Petrolpump Name:</h1> <input />{" "}
          </div>
        </div>
        <div className="purchase-detail">
          <div className="purchase-data">
            <h1>Quantity in Ltr:</h1> <input />{" "}
          </div>
          <div className="purchase-data">
            <h1>Amount:</h1> <input />{" "}
          </div>
        </div>
      </div>
      <div className="purchase-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                Product<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Quantity<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Rate<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Amount<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="billBtn">
          <div>
            <h1>Payment Type:</h1>
          </div>
          <div>
            <h1>Grand Total</h1>
            <input />
          </div>
          <button>Generate Bill</button>
        </div>
      </div>
    </>
  );
};

export default Purchase;
