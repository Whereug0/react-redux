import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounterActionCreator, incrementCounterActionCreator, clearCounterActionCreator } from "../../redux/counter/actions";

const CounterApp = () => {
  const dispatch = useDispatch()
  const stateCounter = useSelector(state => state.counterReducer.counter)



  const handleIncrementCounter = () => {
    dispatch(incrementCounterActionCreator())
  };
  const handleDecrementCounter = () => {
    dispatch(decrementCounterActionCreator())
  };
  const handleClearCounter = () => {
    dispatch(clearCounterActionCreator());
  };

  console.log(stateCounter)
  return (
    <div className="App">
      <button onClick={handleIncrementCounter}>+</button>
        {stateCounter}
      <button onClick={handleDecrementCounter}>-</button>
      <button onClick={handleClearCounter}>clear</button>

    </div>
  );
};

export default CounterApp