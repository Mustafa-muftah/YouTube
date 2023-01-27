import { Channel, ChannelItem, SearchListType, VideoDetails, VideoStatistics } from "../../types";
import { actionTypes } from "../types";

export interface searchInputValue {
  type: actionTypes.SEARCH_INPUT_VALUE;
  payload: string;
}

export interface getYouTubeSearchResult {
  type: actionTypes.GET_YOUTUBE_SEARCH_RESULT;
  payload: {
    data:SearchListType,
    filter:boolean
  };
}

export interface setSearchType {
  type: actionTypes.SET_SEARCH_TYPE;
  payload: string;
}

export interface setPublishAfter {
  type: actionTypes.SET_PUBLISH_AFTER;
  payload: string;
}

export interface getVideoDetails {
  type: actionTypes.GET_YOUTUBE_VIDEO_DETAILS;
  payload: VideoDetails;
}

export interface getVideoStatics {
  type: actionTypes.GET_YOUTUBE_VIDEO_STATICS;
  payload: VideoStatistics;
}

export interface getChannelDetails {
  type: actionTypes.GET_YOUTUBE_CHANNEL_DETAILS;
  payload: Channel;
}

export interface isLoading {
  type: actionTypes.Is_LOADING;
}

export interface loadingIsFinished {
  type: actionTypes.LOADING_IS_FINISHED;
}



export type searchActions =
  | getYouTubeSearchResult
  | searchInputValue
  | getVideoDetails
  | getVideoStatics
  | getChannelDetails;

export type FilterActions = setSearchType | setPublishAfter ;

export type globalActions = isLoading | loadingIsFinished ;
