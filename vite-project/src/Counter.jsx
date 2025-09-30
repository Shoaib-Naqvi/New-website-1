import React, { useState } from "react";
import './Counter.css'

export default function Counter() {
  // Declare state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Update state on button click */}
      <button onClick={() => setCount(count + 1)} id="card">Increase</button>
      <button  onClick={() => setCount(count - 1)} id="card2">Decrease</button>
    </div>
  );
}

//export default Counter;
