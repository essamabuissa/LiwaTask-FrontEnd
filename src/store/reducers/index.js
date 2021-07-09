import { combineReducers } from "redux";
import candidatesReducer from "./candidatesReducer";

const rootReducers = combineReducers({
  candidatesReducer,
});
export default rootReducers;
