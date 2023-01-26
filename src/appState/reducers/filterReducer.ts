import { actionTypes } from "../types";
import produce from "immer";
import moment from "moment";
import { FilterActions } from "../actionTypes";

export const initialState: {
  searchType: string;
  PublishedAfter: string;
  PublishedAfterDate: string
} = {
  searchType: "",
  PublishedAfter: "",
  PublishedAfterDate:"",
};

export const filterReducer = produce(
  (state = initialState, action: FilterActions) => {
    switch (action.type) {
      
      case actionTypes.SET_SEARCH_TYPE:
        state.searchType = action.payload;
        return state;

      case actionTypes.SET_PUBLISH_AFTER:
        if (action.payload == "LastMonth") {
          state.PublishedAfter = action.payload;
          state.PublishedAfterDate = moment()
            .subtract(30, "days").format()
        } else if (action.payload == "LastYear") {
          state.PublishedAfter = action.payload;
          state.PublishedAfterDate = moment()
            .subtract(12, "months").format();
        } else {
          state.PublishedAfter = action.payload;
          state.PublishedAfterDate = "";
        }
        return state;
      default:
        return state;
    }
  },
  initialState
);
