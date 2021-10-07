import { combineReducers } from "redux";
import noteReducer from "./noteReducer";

const reducers = {
  noteReducer,
};

export default combineReducers(reducers);
