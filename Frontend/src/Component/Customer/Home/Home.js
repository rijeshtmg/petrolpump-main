import React from "react";
import CNav from "../CNav/CNav";
import "./Home.css";
const Home = () => {
  return (
    <>
      <CNav />
      <h1 className="homeTitle">Petrol Pumps</h1>
      <div className="petrolPumpDetails">
        <div className="petrolPumpDetail">
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
            Himal Petrol Pump
          </h5>
          <p
            style={{
              marginLeft: "15px",
              marginRight: "10px",
              color: "#686868",
            }}
          >
            Himal Petrol Pump is a small petrol station located in the Kalopul
            Kathmandu. It is situated on a scenic route that connects a small
            town to a popular tourist destination.{" "}
          </p>
          <p
            style={{
              marginLeft: "15px",

              fontWeight: "500",
            }}
          >
            Kalopul, Kathmandu
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
