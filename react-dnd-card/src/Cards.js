import React, { useState } from 'react';


const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "text 1"
    }, {
      id: 2,
      text: "text 2"
    }, {
      id: 3,
      text: "text 3"
    }
  ])

  const renderCard = (card, index) => {
    return <div>index = {index}, card.id = {card.id}, card.text = {card.text}</div>
  }

  return (
    <>
    {
      cards.map((card, i) => renderCard(card, i))
    }
    </>
  )
}

export default Cards;

