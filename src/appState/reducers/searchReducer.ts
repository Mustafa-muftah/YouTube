import { actionTypes } from "../types";
import { searchActions } from "../actionTypes";
import produce, { current } from "immer";
import { SearchListType } from "../../types";

export const initialState: {
  searchInputValue: string;
  searchList: SearchListType[];
  NextpageToken: string;
  numberOfResults: number;
  videosDetalis: any;
  videoStatics: any;
  channelDetails: any;
} = {
  searchInputValue: "",
  searchList: [],
  NextpageToken: "",
  numberOfResults: 0,
  videosDetalis: [],
  videoStatics: [],
  channelDetails: [],
};

export const searchReducer = produce(
  (state = initialState, action: searchActions) => {
    switch (action.type) {
      case actionTypes.SEARCH_INPUT_VALUE:
        state.searchInputValue = action.payload;
        if (state.searchInputValue.length === 0) {
          state.searchList=[]
          state.videosDetalis = [];
          state.videoStatics = [];
          state.channelDetails=[]
        }
        return state;
      case actionTypes.GET_YOUTUBE_SEARCH_RESULT:
        state.numberOfResults = action.payload.data.pageInfo.totalResults;
        if(action.payload.filter){
          action.payload.data.items.forEach((item: any) => {
              state.searchList =[];
              state.searchList.push(item);
            })
        }
        action.payload.data.items.forEach((item: any) => {
          if(!state.searchList?.includes(item.etag)){
          state.searchList.push(item);
          }
        });
        state.NextpageToken = action.payload.data.nextPageToken;
        return state;

      case actionTypes.GET_YOUTUBE_VIDEO_DETAILS:
        state.videosDetalis.push(action.payload);
        return state;
      case actionTypes.GET_YOUTUBE_VIDEO_STATICS:
        state.videoStatics.push(action.payload);
        return state;
      case actionTypes.GET_YOUTUBE_CHANNEL_DETAILS:
        state.channelDetails.push(action.payload);
        return state;
      default:
        return state;
    }
  },
  initialState
);
