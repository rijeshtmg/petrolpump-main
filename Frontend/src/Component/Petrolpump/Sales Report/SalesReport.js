import React, { useEffect, useState } from 'react';
import './SalesReport.css';
import Nav from '../Navbar/Nav';
import axios from 'axios';
import SalesTable from './SalesTable';
const SalesReport = () => {
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
      <h1 className="salesReport-Title">Sales Report</h1>
      {/* <div className="salesReport-dataSearches">
        <div className="salesReport-dataSearch">
          <div className="salesReport-data">
            <h1>Start Date:</h1> <input />{' '}
          </div>
          <div className="salesReport-data">
            <h1>End Date:</h1> <input />{' '}
          </div>
          <button className="searchBtn">Search</button>
        </div>
      </div> */}

      <div>
        <SalesTable lists={lists} />
      </div>
    </>
  );
};

export default SalesReport;
