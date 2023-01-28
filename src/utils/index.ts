import { isMobile } from "react-device-detect";
import { Channel, VideoDetails, VideoStatisticsType } from "../types";

export const convertDuration =(duration?:any)=> {
    let a = duration?.match(/\d+/g) 
  
    if (duration?.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
      a = [0, a[0], 0];
    }
  
    if (duration?.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
      a = [a[0], 0, a[1]];
    }
    if (duration?.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
      a = [a[0], 0, 0];
    }
  
    duration = 0 
  
    if (a?.length == 3) {
      duration = duration + parseInt(a[0]) * 3600;
      duration = duration + parseInt(a[1]) * 60;
      duration = duration + parseInt(a[2]);
    }
  
    if (a?.length == 2) {
      duration = duration + parseInt(a[0]) * 60;
      duration = duration + parseInt(a[1]);
    }
  
    if (a?.length == 1) {
      duration = duration + parseInt(a[0]);
    }
    let h = Math.floor(duration / 3600);
    let m = Math.floor(duration % 3600 / 60);
    let s = Math.floor(duration % 3600 % 60);
    return (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  

 export const numberWithCommas =(argument:string) => {
    return argument?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberWithSymbol =(num:number) => {
  if (num >= 1000000000) {
     return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
     return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
     return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}


export const findIndexById =(videoDetails: VideoDetails[] | VideoStatisticsType[] | Channel[], id: string) => {
  return videoDetails.findIndex(videoDetail => videoDetail.items.findIndex(item => item.id === id) > -1);
}


export const totalViewsConverter = (totalViews: string) => {
  if (isMobile) {
    return numberWithCommas(totalViews);
  } else {
    return numberWithSymbol(Number(totalViews));
  }
};