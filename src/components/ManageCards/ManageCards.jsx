import React from 'react'
import EditCard from '../EditCard/EditCard'
import DisplayCard from '../DisplayCard/DisplayCard'

import './manageCards.css'

const ManageCards = ({allData, deleteCard, updateItem, newItem}) => {

    return (
        <div className='manage-cards-container'>
            {allData.map(card => <DisplayCard key={card.id} card={card} deleteCard={deleteCard} updateItem={updateItem} />)}
            {<EditCard card={{question: "", answer: "", id:""}} displayUpdateItem={newItem} cancel={()=>{}} />}
        </div>
    )
}

export default ManageCards;
