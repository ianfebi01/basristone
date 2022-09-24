import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";
import { UserReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  data: DataReducer,
});

export default rootReducer;
