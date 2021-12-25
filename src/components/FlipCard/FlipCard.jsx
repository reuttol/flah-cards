import React from "react";

import "./flipCard.css";

const FlipCard = ({ cardItem, show, clickCard }) => {
  return (
    <div className="card-container" onClick={clickCard}>
      <div className={`card ${show}`}>
        <div className="card__face card__face--front">{cardItem.question}</div>
        <div className={"card__face card__face--back"}>{cardItem.answer}</div>
      </div>
    </div>
  );
};

export default FlipCard;
