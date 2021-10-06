import { combineReducers } from "redux";
import dashboard from "./dashboard";
import datas from "./datas";

const reducers = {
  dashboard,
  datas,
};

export default combineReducers(reducers);
