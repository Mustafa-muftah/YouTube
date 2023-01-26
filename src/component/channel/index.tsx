import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useAction } from "../../appState/Hooks/useAction";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import { numberWithCommas } from "../../utils";
import "./Channel.scss"

interface channelProps {
  channelInfo:any,
  channelIndex:number
}

export const Channel:React.FC<channelProps>= ({channelInfo , channelIndex}) => {

  const {getYouTubeChannelDetails} =useAction()
  const channelDetails = useTypeSelector(state => state.search.channelDetails)

  useEffect(() => {    
    console.log(channelDetails);
    getYouTubeChannelDetails(channelInfo.id.channelId)
  },[])

  const totalSubscriptionConverter = (totalSubscriptions:string) => {
    if(isMobile){
      return  numberWithCommas(totalSubscriptions)
    }
  }


  return (
    <div>
      <div className="channel__container">
        <img
          src={channelInfo.snippet.thumbnails.high.url}
          alt="channel-thumb"
        />
        <div>
          <h3>{channelInfo.snippet.channelTitle}</h3>
          <p>{channelDetails[channelIndex]?.items[0].statistics.videoCount!} videos</p>
          <p>{totalSubscriptionConverter(channelDetails[channelIndex]?.items[0]?.statistics?.subscriberCount!)} subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default Channel;