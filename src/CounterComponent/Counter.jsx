import React, { useReducer } from "react";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;
    case "PLUS":
      return state + action.paylod;
    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  const UpClick = () => {
    dispatch({ type: "UP" });
  };

  const DownClick = () => {
    dispatch({ type: "DOWN" });
  };

  const Plus=()=>{
      dispatch({type:"PLUS" , paylod: 5})
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={UpClick}>
        Up
      </button>
      <button type="button" onClick={DownClick}>
        Down
      </button>
      <button type="button">Reset</button>
      <button type="button" onClick={Plus}>Plus</button>
    </div>
  );
};

export default Counter;
