import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashActionCreator, getCashActrionCreator, clearCashActionCreator } from "../../redux/cash/actions";

const Balance = () => {
    const cashState = useSelector(state => state.cashReducer.cash)
    const dispatch = useDispatch()
    const handleClearCounter = () => {
        dispatch(clearCashActionCreator());
      };
    return (
        <div>
            balance - {cashState}
            <button onClick={() => dispatch(addCashActionCreator(Number(prompt())))}>
                пополнить              
            </button>
            <button onClick={() => dispatch(getCashActrionCreator(Number(prompt())))}>
                снять
            </button>
            <button onClick={handleClearCounter}>clear</button>

        </div>
    )
}

export default Balance