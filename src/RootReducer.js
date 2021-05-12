import { combineReducers } from "redux";
import Five_Day_Api_Reducer from "./Redux/API_5Days/FDTH_ApiReducer";
import currentApiReducer from "./Redux/API_CUR/ApiReducer";

//import curApiReducer from "./Redux/API_CUR/ApiReducer";

const rootreducer=combineReducers({
    day_5_Api:Five_Day_Api_Reducer,
    current_Api:currentApiReducer
})
export default rootreducer;