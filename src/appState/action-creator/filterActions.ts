import { actionTypes } from "../types";

  export const setSearchType = (type:string) => {
    return {
      type:actionTypes.SET_SEARCH_TYPE,
      payload:type
    }
  }
  

  export const setPublishAfter = (date:string) => {
    return {
      type:actionTypes.SET_PUBLISH_AFTER,
      payload:date
    }
  }

