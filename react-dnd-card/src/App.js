import React from "react";
import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Cards from "./Cards";

export default function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Cards />
      </DndProvider>
    </>
  );
}

