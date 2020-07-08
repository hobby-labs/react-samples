import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}


const DroppableComponent = (onDragEnd: (result, provided) => void) => (props) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'1'} direction="vertical">
        {(provided) => {
          return (
            <TableBody ref={provided.innerRef} {...provided.droppableProps} {...props}>
              {props.children}
              {provided.placeholder}
            </TableBody>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}


const DndTable = () => {

  const [items, setItems] = useState();

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
        return
    }

    console.log(`dragEnd ${result.source.index} to  ${result.destination.index}`)
    const items = reorder(
        this.state.items,
        result.source.index,
        result.destination.index
    )
  }



  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr</TableCell>
            <TableCell>Label</TableCell>
            <TableCell align="right">Text</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component={DroppableComponent(this.onDragEnd)}>
          {this.state.items.map((item, index) => (
            <TableRow component={DraggableComponent(item.id, index)} key={item.id} >
              <TableCell scope="row">{index + 1}</TableCell>
              <TableCell>{item.primary}</TableCell>
              <TableCell align="right">{item.secondary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DndTable;

