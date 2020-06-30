import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  myContact: contactReducer, // on fait le mapping ici entre la avriable myContact et le Reducer contactReducer
});
