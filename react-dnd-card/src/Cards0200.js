import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import update from "immutability-helper";

import Card0201 from './Card0201';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, calories, fat, carbs, protein, image) {
  return { id, name, calories, fat, carbs, protein, image };
}

const rows = [
  createData(1, 'Katsudon', 159, 6.0, 24, 4.0, "katsudon.jpg"),
  createData(2, 'Ochazuke', 237, 9.0, 37, 4.3, "ochazuke.jpg"),
  createData(3, 'Soba', 262, 16.0, 24, 6.0, "soba.jpg"),
  createData(4, 'Sushi', 305, 3.7, 67, 4.3, "sushi.jpg"),
];

export default function SimpleTable() {
  const classes = useStyles();
  const [cards, setCards] = useState(rows);


//  return (
//    <TableContainer component={Paper}>
//      <Table className={classes.table} aria-label="simple table">
//        <TableHead>
//          <TableRow>
//            <TableCell>id</TableCell>
//            <TableCell>Dessert (100g serving)</TableCell>
//            <TableCell align="right">Calories</TableCell>
//            <TableCell align="right">Fat&nbsp;(g)</TableCell>
//            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//            <TableCell align="right">Protein&nbsp;(g)</TableCell>
//          </TableRow>
//        </TableHead>
//        <TableBody>
//          {rows.map((row) => (
//            <TableRow key={row.name}>
//              <TableCell align="right">{row.id}</TableCell>
//              <TableCell component="th" scope="row">
//                {row.name}
//              </TableCell>
//              <TableCell align="right">{row.calories}</TableCell>
//              <TableCell align="right">{row.fat}</TableCell>
//              <TableCell align="right">{row.carbs}</TableCell>
//              <TableCell align="right">{row.protein}</TableCell>
//            </TableRow>
//          ))}
//        </TableBody>
//      </Table>
//    </TableContainer>
//  );

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(
        cards,
        { $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]] }
      )
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Card0201 index={row.id} id={row.id} name={row.name} calories={row.calories} image={row.image} moveCard={moveCard} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

