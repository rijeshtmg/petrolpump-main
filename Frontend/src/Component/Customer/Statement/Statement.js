import React, { useEffect, useState } from "react";
import CNav from "../CNav/CNav";
import "./Statement.css";
import axios from "axios";
import StatementTable from "./StatementTable";
const Statement = () => {
  const [lists, setLists] = useState([]);
  const loadData = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API}/api/v2/user/userpurchase`
      );
      setLists(res.data.sales);
    } catch (error) {}
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <CNav />
      <h1 className="statementTitle">Statement</h1>
      <div className="userStatements">
        <div>
          <StatementTable lists={lists} />
        </div>
      </div>
    </>
  );
};

export default Statement;
