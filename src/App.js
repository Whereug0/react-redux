import { useState } from "react";
import "./App.css";
import CounterApp from "./components/counter";
import Balance from "./components/balance";
function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrementCounter = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="App">
      <p>Width useState</p>
      <button onClick={handleIncrementCounter}>+</button>
        {counter}
      <button onClick={handleDecrementCounter}>-</button>
      <p>------------------------</p>
      <p>Width React-Redux</p>
      <CounterApp />
      <p>------------------------</p>
      <Balance />
      <p>------------------------</p>
      
    </div>
  );
}

export default App;
