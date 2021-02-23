import { combineReducers } from "redux";
import studentReducer from "./student/studentReducer";
const rootReducer = combineReducers({
  students: studentReducer,
});

export default rootReducer;
