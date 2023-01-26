import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { globalReducer } from "./globalReducers";
import { searchReducer } from "./searchReducer";


export const Reducers = combineReducers({
  search: searchReducer,
  filter:filterReducer,
  global:globalReducer
});

export type RootState = ReturnType<typeof Reducers>;
