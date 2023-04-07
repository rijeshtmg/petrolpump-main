import React from "react";

const PumpCard = ({ user }) => {
  return (
    <div className="petrolPumpDetail">
      <div className="image1" src={user.avatar.url} alt={user.name} />
      <h5
        className="pumpName"
        style={{ marginLeft: "15px", marginTop: "10px" }}
      >
        {user.name}
      </h5>
      <p
        style={{
          marginLeft: "15px",
          marginRight: "10px",
          color: "#686868",
        }}
      >
        Himal Petrol Pump is a small petrol station located in the Kalopul
        Kathmandu. It is situated on a scenic route that connects a small town
        to a popular tourist destination.{" "}
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
  );
};

export default PumpCard;
