import React from "react";
import "./styles.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Cards0000 from "./Cards0000";
import Cards0100 from "./Cards0100";
import Cards0200 from "./Cards0200";

// SemanticUI ================================================
import SemanticUIDnDTable from "./SemanticUIDnDTable";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { quotes } from './data'

export default function App() {
//  return (
//    <Container maxWidth="md">
//      <Grid container style={{flexGrow: 1}} spacing={2}>
//        <Grid item xs={4}>
//          menu
//        </Grid>
//        <Grid item xs={8}>
//          <DndProvider backend={HTML5Backend}>
//            <Cards0000 />
//          </DndProvider>
//        </Grid>
//      </Grid>
//    </Container>
//  );

//  return (
//    <Container maxWidth="md">
//      <Grid container style={{flexGrow: 1}} spacing={2}>
//        <Grid item xs={3}>
//          menu
//        </Grid>
//        <Grid item xs={9}>
//          <DndProvider backend={HTML5Backend}>
//            <SemanticUIDnDTable />
//          </DndProvider>
//        </Grid>
//      </Grid>
//    </Container>
//  );

  return (
    <div className="App">
      <SemanticUIDnDTable />
    </div>
  );

}

