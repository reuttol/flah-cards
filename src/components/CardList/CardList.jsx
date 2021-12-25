import React, { useState } from "react";
import FlipCard from "../FlipCard/FlipCard";

const CardList = ({ allData}) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState("");

  const nextCard = () => {
    setShow("");
    setIndex(index + 1);
  };

  return (
    <div>
      <FlipCard cardItem={allData[index]} show={show} />
      <div>
        <button onClick={() => setShow("reveal")}>Reveal Answer</button>
        <button onClick={nextCard}>Next Card</button>
      </div>
      <h4>Did you get it right?</h4>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default CardList;
