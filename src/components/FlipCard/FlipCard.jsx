import React from "react";

import "./flipCard.css";

const FlipCard = ({ cardItem, show }) => {
  return (
    <div className="card-container">
      <div className={`card ${show}`}>
        <div className="card__face card__face--front">{cardItem.question}</div>
        {/* {cardItem.question} {cardItem.answer} */}
        <div className={"card__face card__face--back"}>{cardItem.answer}</div>
      </div>
    </div>
  );
};

export default FlipCard;
