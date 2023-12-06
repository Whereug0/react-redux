// action types
import { ADD_CASH, GET_CASH, DATA_CLEAR_CASH } from "./types"



export const addCashActionCreator = (cash) => ({
    type: ADD_CASH,
    payload: cash
})

export const getCashActrionCreator = (cash) => ({
    type: GET_CASH,
    payload: cash
})

export const clearCashActionCreator = (cash) => ({
    type: DATA_CLEAR_CASH,
    payload: cash
})


