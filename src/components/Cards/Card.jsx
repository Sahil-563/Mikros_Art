import React from "react";
import "./CardStyles.css";
function Card({ painterName, date, imageUrl }) {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={imageUrl} alt={painterName} />
        </div>

        <div className="card-info">
          <h2>{painterName}</h2>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
