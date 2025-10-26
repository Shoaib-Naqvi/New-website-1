
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveToCart, ResetCart } from "./features/cartSlice";

function App() {
    
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sampleItem = { id: 1, name: "Laptop", price: 1000 };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🛒 Cart Example (Redux Toolkit)</h1>

      <button onClick={() => dispatch(AddToCart(sampleItem))}>Add To Cart</button>
      <button onClick={() => dispatch(RemoveToCart(sampleItem.id))}>Remove From Cart</button>
      <button onClick={() => dispatch(ResetCart())}>Reset Cart</button>

      <h3>Total Amount: ${totalAmount}</h3>

      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} — Quantity: {item.quantity} — Price: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
