import React from 'react'
import Combobox from "react-widgets/Combobox";
import './Pos.css'
import Nav from "../Navbar/Nav";
const POS = () => {
  return (
    <div className="pos">
      <Nav/>
      <h1 className="pos-pageTitle">New Sale</h1>
      <p className="selectProduct"> Select a product</p>
      <div className="pos-products">
        <div className="pos-product">
          <h5>Petrol</h5> <p>Rs 182/Ltr</p>{" "}
        </div>
        <div className="pos-product">
          <h5>Diesel</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
        <div className="pos-product">
          <h5>Kerosene</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
      </div>
      <div className="pos-details">
        <div className="pos-detail">
          <div className="pos-data">
            <h1>Invoice No. :</h1> <input placeholder="Eg: 101" />{" "}
          </div>
          <div className="pos-data">
            <h1>Customer Name:</h1> <input />{" "}
          </div>
        </div>
        <div className="pos-detail">
          <div className="pos-data">
            <h1>Quantity in Ltr:</h1> <input />{" "}
          </div>
          <div className="pos-data">
            <h1>Amount:</h1> <input />{" "}
          </div>
        </div>
      </div>
      <div className="pos-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Rate</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td style={{ fontSize: 20, color: "red" }}>x</td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td style={{ fontSize: 20, color: "red" }}>x</td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td style={{ fontSize: 20, color: "red" }}>x</td>
            </tr>
          </tbody>
        </table>
        <div className='billBtn'>
          <div>
            <h1>Payment Type:</h1>
            <Combobox
              data={["Cash", "Mobile Banking"]}
              placeholder="Select Option"
            />
          </div>
          <div>
            <h1>Grand Total</h1>
            <input />
          </div>
          
            <button>Generate Bill</button>
          
        </div>
      </div>
    </div>
  );
}

export default POS