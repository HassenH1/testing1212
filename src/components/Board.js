import React, { useState } from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(8, 1fr) / repeat(8, 1fr)", //original
  // gridTemplate: "repeat(10, 150px) / repeat(10, 150px)",
};

const Board = ({ squares }) => (
  <div style={style}>
    {squares.map((square, i) => {
      return <Square key={i} value={square} num={i} />;
    })}
  </div>
);

export default Board;
