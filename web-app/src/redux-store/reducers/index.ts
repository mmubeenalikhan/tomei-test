import { combineReducers } from "redux";
import progressBarreducer from "./accountReducer";

const reducers = combineReducers({
  progressBarreducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
