import { actionTypes } from "../types"


 export const isLoading = () => {
    return {
      type:actionTypes.Is_LOADING,
    }
  }

  export const LoadingIsFinished = () => {
    return {
      type:actionTypes.LOADING_IS_FINISHED,
    }
  }