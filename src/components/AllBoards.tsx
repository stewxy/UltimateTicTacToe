import React, { useState } from "react";
import "../App.css";

interface Props {
  value: String;
}

const AllBoards = () => {
  //const [click, setClicked] = useState(false);

  function Square() {
    const [value, setValue] = useState("");
    function handleClick() {
      setValue("X");
    }
    return (
      <button className="Grid" onClick={handleClick}>
        {value}
      </button>
    );
  }

  function SingleBoard() {
    return (
      <div className="oneBoard">
        <div className="squareRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="squareRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="squareRow">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }

  function UltimateSquare() {
    return (
      <div className="fullBoard">
        <div className="ultimateRow">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
        <div className="ultimateRow">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
        <div className="ultimateRow">
          <SingleBoard />
          <SingleBoard />
          <SingleBoard />
        </div>
      </div>
    );
  }

  return UltimateSquare();
};

export default AllBoards;
