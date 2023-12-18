import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const handleIncrement = (type) => {
    if (type === "step") {
      setStep(step + 1);
    } else {
      setCount(count + step);
    }
  };

  const date = new Date();
  date.setDate(date.getDate() + count);
  const handleDecrement = (type) => {
    if (type === "step") {
      setStep(step - 1);
    } else {
      setCount(count - step);
    }
  };
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
        className="step"
      >
        <p>Step</p>
        <button onClick={() => handleDecrement("step")}>-</button>
        <p>{step}</p>
        <button onClick={() => handleIncrement("step")}>+</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
        className="count"
      >
        <p>Count</p>
        <button onClick={() => handleDecrement("step")}>-</button>
        <p>{count}</p>
        <button onClick={() => handleIncrement("count")}>+</button>
      </div>
      <p>
        {count} days from now {date.toDateString()}
      </p>
    </div>
  );
}
