import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({ home: homeReducer, login: loginReducer });

export default rootReducer;
