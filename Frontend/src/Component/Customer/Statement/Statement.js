import React from "react";
import CNav from "../CNav/CNav";
import "./Statement.css";
import Table from "react-bootstrap/Table";
const Statement = () => {
  return (
    <>
      <CNav />
      <h1 className="statementTitle">Statement</h1>
      <div className="statement-dataSearches">
        <div className="statement-dataSearch">
          <div className="statement-data">
            <h1>Start Date:</h1> <input />{" "}
          </div>
          <div className="statement-data">
            <h1>End Date:</h1> <input />{" "}
          </div>
          <button className="searchBtn">Search</button>
        </div>
      </div>
      <div className="userStatements">
        <Table striped>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Petrol Pump Name</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity(In ltr)</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-03-22</td>
              <td>Himal Petrolpump</td>
              <td>Petrol</td>
              <td>10</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>2023-03-20</td>
              <td>Rimal Petrolpump</td>
              <td>Diesel</td>
              <td>15</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>2023-03-18</td>
              <td>Kailash Petrolpump</td>
              <td>Petrol</td>
              <td>20</td>
              <td>3600</td>
            </tr>
            <tr>
              <td>2023-03-16</td>
              <td>Hamro Petrolpump</td>
              <td>Diesel</td>
              <td>30</td>
              <td>4000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Statement;
