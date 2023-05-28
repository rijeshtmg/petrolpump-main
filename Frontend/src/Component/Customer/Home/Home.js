import React, { useState, useEffect } from "react";
import CNav from "../CNav/CNav";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const [lists, setLists] = useState([]);
  const loadData = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API}/api/v2/stores`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setLists(res.data.user);
    } catch (error) {}
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <CNav />
      <h1 className="homeTitle">Petrol Pumps</h1>
      <div className="container">
        <div className="petrolPumpDetails row">
          {lists.map((val, index) => {
            return (
              <div className="petrolPumpDetail col-4">
                <div
                  className="image1"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1578605047448-0b69dbd44217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
                  }}
                />
                <h5
                  className="pumpName"
                  style={{ marginLeft: "15px", marginTop: "10px" }}
                >
                  {val.name}
                </h5>
                <p
                style={{
                  marginLeft: "15px",
                  marginRight: "10px",
                  color: "#686868",
                }}
                >
                  {val.description}
                </p>
                <p
                style={{
                  marginLeft: "15px",

                  fontWeight: "500",
                }}
                >
                  {val.address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
