import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(Array(64).fill(null));

  return (
    <div>
      <Board squares={board} />
    </div>
  );
}

export default App;
