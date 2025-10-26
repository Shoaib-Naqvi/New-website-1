import React from "react";

function CounterButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increase</button>;
}

export default CounterButton;