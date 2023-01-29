import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useAction } from "../../appState/Hooks/useAction";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import { findIndexById, numberWithCommas } from "../../utils";
import "./Channel.scss"



interface channelProps {
  channelInfo:any,
}

export const Channel:React.FC<channelProps>= ({channelInfo }) => {

  const {getYouTubeChannelDetails} =useAction()
  const channelDetails = useTypeSelector(state => state.search.channelDetails)

  useEffect(() => {    
    getYouTubeChannelDetails(channelInfo.id.channelId)
  },[])

  const totalSubscriptionConverter = (totalSubscriptions:string) => {
    if(isMobile){
      return  numberWithCommas(totalSubscriptions)
    }
  }


  return (
      <div className="channel__container" data-testid="channel">
        <img
          src={channelInfo.snippet.thumbnails.high.url}
          alt="channel-thumb"
        />
        <div>
          <h3>{channelInfo.snippet.channelTitle}</h3>
          <p>{channelDetails[findIndexById(channelDetails,channelInfo.id.channelId!)]?.items[0].statistics.videoCount!} videos</p>
          <p>{totalSubscriptionConverter(channelDetails[findIndexById(channelDetails,channelInfo.id.channelId!)]?.items[0]?.statistics?.subscriberCount!)} subscribers</p>
        </div>
      </div>
  );
};

export default Channel;