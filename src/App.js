import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        style={{
          color: "red",
          display: "block",
          margin: "auto",
          padding: " 0.5rem"
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          color: "red",
          display: "block",
          margin: "auto",
          padding: " 0.5rem"
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{
          color: "red",
          display: "block",
          margin: "auto",
          padding: " 0.5rem"
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
