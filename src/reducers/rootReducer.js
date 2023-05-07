import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import filesReducer from "./filesReducer";
import pricesReducer from "./pricesReducer";

const rootReducer = combineReducers({prices: pricesReducer, files: filesReducer, counter: counterReducer})

export default rootReducer;