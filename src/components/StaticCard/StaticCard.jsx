import React from "react";

import './staticCard.css'

const StaticCard = ({ card, deleteCard, editCard }) => {

  return (
    <div className="static-card-container">
      <div className="header">
        <label>Question:</label>
        <p>{card.question}</p>
      </div>
      <div className="header">
        <label>Answer:</label>
        <p>{card.answer}</p>
      </div>
      <div className="btns-container">
        <button onClick={()=>editCard()}>Update</button>
        <button onClick={()=>deleteCard(card.id)}>Delete</button>
      </div>
    </div>
  );
};

export default StaticCard;
