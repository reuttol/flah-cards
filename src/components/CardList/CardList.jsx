import React, { useState } from "react";
import FlipCard from "../FlipCard/FlipCard";

import './cardList.css'

const CardList = ({ allData}) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState("");
  const [finished, setFinished] = useState(false);
  const [correct, setCorrect] = useState(0);

  const nextCard = () => {
    if(index === allData.length-1)
      return;
    
    setShow("");
    if(index < allData.length - 1){
      setIndex(index + 1);
    }else
      setFinished(true);
  };

  return (
    <div className="cards-container">
      {finished && <h3 className="finish-header">You Finished All The Cards! You Got {correct} Answers Right!</h3>}
      <FlipCard cardItem={allData[index]} show={show} clickCard={()=>setShow("reveal")}/>
      <div className="btns-container">
        <button onClick={() => setShow("reveal")}>Reveal Answer</button>
        <button onClick={nextCard}>Next Card</button>
      </div>
      <h4>Did you get it right?</h4>
      <div className="btns-container">
        <button onClick={()=>setCorrect(correct+1)}>Yes</button>
        <button onClick={()=>{}}>No</button>
      </div>
      <h4>Completed: {index+1}/{allData.length}</h4>
    </div>
  );
};

export default CardList;
