import React from "react";
import { useState } from "react";
import ResetButton from "./ResetButton"; // Adjust the import path as necessary


export function CounterApp() {
 const [ setCount] = useState(0); 

 const handleReset = () => {
    setCount(0);
  };
    return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
    <ResetButton onReset={handleReset}>   </ResetButton>
</div> )}

export default CounterApp;