import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import AllBoards from "./components/AllBoards";
import UltimateTicTacToe from "./components/UltimateTicTacToe";
import UltimateTicTacToePage from "./pages/UltimateTicTacToePage";
import TicTacToePage from "./pages/TicTacToePage";

import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      {/* <div className="main">
        <div className="htmlUTicTacToe">
          <h1 className="mainHeading">Ultimate TicTacToe</h1>
          <UltimateTicTacToe></UltimateTicTacToe>
          <div className="howToPlaySect">
            How To Play <br />
            <p className="howToPlayInfo">
              X starts. Each Ultimate TicTacToe grid contains a regular game of
              TicTacToe. For the first action, every grid is available. When a
              player selects a grid, the following player must make their next
              move on the board corresponding to the grid that the previous
              player selected. If a player selects a grid that corresponds to a
              board that already has a winner, then the following player can
              make their next move on any board that doesn't have a winner. To
              win the game, a player must win 3 "regular" TicTacToe games that
              line up vertically, horizontally or diagonally (like regular
              TicTacToe).
            </p>
          </div>
        </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="UltimateTicTacToePage"
              element={<UltimateTicTacToePage />}
            />
            <Route path="TicTacToePage" element={<TicTacToePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
