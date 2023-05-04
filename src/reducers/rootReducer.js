import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import filesReducer from "./filesReducer";

const rootReducer = combineReducers({files: filesReducer, counter: counterReducer})

export default rootReducer;