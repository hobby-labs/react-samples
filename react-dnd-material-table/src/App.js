import React from "react";
import "./styles.css";

import { DndProvider } from "react-dnd";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import DndTable from './DndTable';

export default function App() {
  return (
    <Container maxWidth="md">
      <Grid container style={{flexGrow: 1}} spacing={2}>
        <Grid item xs={3}>
          menu
        </Grid>
        <Grid item xs={9}>
          <DndTable />
        </Grid>
      </Grid>
    </Container>
  );
}

