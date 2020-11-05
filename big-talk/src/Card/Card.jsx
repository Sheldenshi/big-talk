import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="question">{props.question}</div>
    </div>
  </div>
);

export default Card;
