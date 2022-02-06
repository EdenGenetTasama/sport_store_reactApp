import React, { useReducer } from "react";
const reduceAction = (state = {}, action) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;

    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(reduceAction, 0);
  const UpClick = () => {
    dispatch({ type: "UP" });
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={UpClick}>
        Up
      </button>
      <button type="button">Down</button>
      <button type="button">Reset</button>
    </div>
  );
};

export default Counter;
