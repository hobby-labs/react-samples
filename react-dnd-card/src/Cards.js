import React, { useState, useCallback } from 'react';
import Card from "./Card";
import Card2 from "./Card2";
import update from "immutability-helper";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "text 1",
      image: "katsudon.jpg"
    }, {
      id: 2,
      text: "text 2",
      image: "sushi.jpg"
    }, {
      id: 3,
      text: "text 3",
      image: "ochazuke.jpg"
    },{
      id: 4,
      text: "text 4",
      image: "katsudon.jpg"
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
    //return (
    //  <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />
    //)

    return (
      <Card2 key={card.id} index={index} image={card.image} id={card.id} text={card.text} moveCard={moveCard} />
    )
  }

  return (
      <Container maxWidth="md">
        <Grid container style={{flexGrow: 1}} spacing={2}>
          <Grid item xs={4}>
            menu
          </Grid>
          <Grid item xs={8}>
            { cards.map((card, i) => renderCard(card, i)) }
          </Grid>
        </Grid>
      </Container>
  )

  //return (
  //  <div>
  //    { cards.map((card, i) => renderCard(card, i)) }
  //  </div>
  //)
}

export default Cards;

