import { actionTypes } from "../types";
import produce from "immer";
import {  globalActions } from "../actionTypes";

export const initialState: {
 isLoading:boolean;
} = {
 isLoading:false
};

export const globalReducer = produce(
  (state = initialState, action: globalActions) => {
    switch (action.type) {
        
        case actionTypes.Is_LOADING:
            state.isLoading = true;
            return state;
            
            case actionTypes.LOADING_IS_FINISHED:
            state.isLoading = false;
            return state;
      default:
        return state;
    }
  },
  initialState
);
