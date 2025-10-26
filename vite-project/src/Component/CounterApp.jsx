import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetCounter";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🧮 Counter App</h1>
      <CounterDisplay count={count} />
      <div style={{ gap: 8, marginTop: 12 }}>
        <CounterButton onIncrement={handleIncrement} />
        <ResetButton onReset={handleReset} />
      </div>
    </div>
  );
}

export default CounterApp;

