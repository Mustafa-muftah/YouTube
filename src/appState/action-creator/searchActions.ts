import { actionTypes } from "../types";
import { globalActions, searchActions  } from "../actionTypes";
import { Dispatch } from "react";
import axios from "axios";
import { Store } from "../store";



export const search =(inputValue:string) => {
  return{
    type:actionTypes.SEARCH_INPUT_VALUE,
    payload:inputValue
  }
}

export const getYouTubeList = (searchValue?:string , nextPage?:string , listType?:string , publishedAfter?:string) => {

const searchInputValue = searchValue ? searchValue :Store.getState().search.searchInputValue
const nextPageToken = nextPage ? `&pageToken=${nextPage}` : "";
const searchType = listType || Store.getState().filter.searchType
const searchTypeParams = searchType ? `&type=${searchType}`:""
const publishedAfterValue = publishedAfter || Store.getState().filter.PublishedAfterDate.length>0 ? `&publishedAfter=${new Date(Store.getState().filter.PublishedAfterDate).toISOString()}`:""

  return async (dispatch: Dispatch<searchActions|globalActions>) => {
    dispatch({
      type:actionTypes.Is_LOADING
    })
    await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&part=snippet&q=${searchInputValue}${nextPageToken}${searchTypeParams}${publishedAfterValue}`).then((res) => {
      dispatch({
        type: actionTypes.GET_YOUTUBE_SEARCH_RESULT,
        payload:{
          data:res.data,
          filter:(listType ||publishedAfter ) ? true :false
        },
      })
    }).then(() => {
      dispatch({
        type:actionTypes.LOADING_IS_FINISHED
      })
    })
  };
};

export const getYouTubeVideoDetails = (id:string) => {
    return async (dispatch: Dispatch<searchActions>) => {
      await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${process.env.API_KEY}`).then((res) => {
        dispatch({
          type: actionTypes.GET_YOUTUBE_VIDEO_DETAILS,
          payload: res.data,
        })
      }).then(async() => {
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=statistics&key=${process.env.API_KEY}`).then((res)=>{
          dispatch({
            type: actionTypes.GET_YOUTUBE_VIDEO_STATICS,
            payload: res.data,
          })
        })

      })
    };
  };

  export const getYouTubeChannelDetails = (id:string) => {
    return async (dispatch: Dispatch<searchActions>) => {
      await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&part=statistics&key=${process.env.API_KEY}`).then((res) => {
        dispatch({
          type: actionTypes.GET_YOUTUBE_CHANNEL_DETAILS,
          payload: res.data,
        })
      })
    };
  };

  

