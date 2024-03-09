// import { style } from "./styles.css";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, updateCounter] = useState(0);

  return (
    <div className="App">
      <span className="counter">{counter}</span>
      <button onClick={() => updateCounter(counter + 1)} className="btn btn-in">
        Increment
      </button>
      <button onClick={() => updateCounter(0)} className="btn btn-re">
        Reset
      </button>
      <button onClick={() => updateCounter(counter - 1)} className="btn btn-de">
        Decrement
      </button>
    </div>
  );
}
