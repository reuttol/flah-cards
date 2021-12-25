import React, { useState } from "react";
import StaticCard from "../StaticCard/StaticCard";
import EditCard from "../EditCard/EditCard";

const DisplayCard = ({ card, deleteCard, updateItem }) => {
  const [edit, setEdit] = useState(false);

  const editCard = () => {
    setEdit(true);
  };

  const cancel = () =>{
      setEdit(false);
  }
  const displayUpdateItem = (card) => {
      console.log(card);
      setEdit(false);
      updateItem(card);
  }
  return (
    <>
      {(!edit &&     
        <StaticCard card={card} deleteCard={deleteCard} editCard={editCard}/>
      ) || <EditCard card={card} displayUpdateItem={displayUpdateItem} cancel={cancel} />}
    </>
  );
};

export default DisplayCard;
