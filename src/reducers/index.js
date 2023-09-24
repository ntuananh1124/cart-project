import { combineReducers } from "redux";
import CartReducer from "./cart";

const allReducers = combineReducers({
    CartReducer,
}) 

export default allReducers;