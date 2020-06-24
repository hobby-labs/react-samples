import React, { useState, useCallback } from 'react';
import Card from "./Card";
import update from "immutability-helper";

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

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(
        cards,
        { $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]] }
      )
    )
  })

  // 1 つのCard をレンダリングする
  const renderCard = (card, index) => {
    return (
      <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />
    )
    //return <div>index = {index}, card.id = {card.id}, card.text = {card.text}</div>
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

