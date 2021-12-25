import React, {useState} from "react";

const EditCard = ({ card , displayUpdateItem, cancel}) => {
  const [newCard, setNewCard] = useState({
    question: card.question,
    answer: card.answer,
    id: card.id,
  });

  const updateKey = (e) => {
    const val = e.target.value;
    setNewCard({ ...newCard, [e.target.name]: val });
  };

  return (
    <div className="static-card-container">
      <div className="header">
        <label>Question:</label>
        <input
          className=""
          name="question"
          value={newCard.question}
          onChange={updateKey}
          placeholder="Question"
        />
      </div>
      <div className="header">
        <label>Answer:</label>
        <input
          className=""
          name="answer"
          value={newCard.answer}
          onChange={updateKey}
          placeholder="Answer"
        />
      </div>
      <div className="btns-container">
        <button onClick={() => displayUpdateItem(newCard)}>Save</button>
        <button onClick={() =>{setNewCard(card); cancel()}}>Cancel</button>
      </div>
    </div>
  );
};

export default EditCard;
