import { actionTypes } from "../types";
import { searchActions } from "../actionTypes";
import produce from "immer";
import { Channel, SearchItems, VideoDetails, VideoStatistics } from "../../types";

export const initialState: {
  searchInputValue: string;
  searchList: SearchItems[];
  NextpageToken: string;
  numberOfResults: number;
  videosDetalis: VideoDetails[];
  videoStatics: VideoStatistics[];
  channelDetails: Channel[];
} = {
  searchInputValue: "",
  searchList: []  ,
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
          action.payload.data.items.forEach((item) => {
              state.searchList =[];
              state.searchList.push(item);
            })
        }
        action.payload.data.items.forEach((item) => {
          if(!state.searchList.find((x=> x.etag === item.etag))){
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
