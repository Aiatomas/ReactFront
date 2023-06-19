import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import filesReducer from "./filesReducer";
import pricesReducer from "./pricesReducer";
import currentUserReducer from "./CurrentUserReducer";

const rootReducer = combineReducers({prices: pricesReducer, files: filesReducer, counter: counterReducer, currentUser: currentUserReducer})

export default rootReducer;