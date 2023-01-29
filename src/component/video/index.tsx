import moment from "moment";
import { useEffect } from "react";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";
import { useAction } from "../../appState/Hooks/useAction";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import { SearchListType } from "../../types";
import {
  convertDuration,
  findIndexById,
  numberWithCommas,
  numberWithSymbol,
  totalViewsConverter,
} from "../../utils";
import "./Video.scss";

interface VideoPlayerProps {
  videoInfo: SearchListType;
}

export const Video: React.FC<VideoPlayerProps> = ({
  videoInfo,
}) => {
  const { getYouTubeVideoDetails } = useAction();
  const { videosDetalis, videoStatics } = useTypeSelector(
    (state) => state.search
  );

  useEffect(() => {
    getYouTubeVideoDetails(videoInfo.id.videoId!);
  }, []);





 


  return (
    <div className="video" data-testid="video">
      <div
        className={`video-thumb ${isTablet && !isMobileOnly ? "Ipad" : ""}`}
        style={{
          background: `url(${videoInfo.snippet.thumbnails.high.url}) center no-repeat`,
        }}
      >
        <div className="duration">
          {videosDetalis.length > 0 &&
            convertDuration(
              videosDetalis[findIndexById(videosDetalis,videoInfo.id.videoId!)]?.items[0].contentDetails.duration!
            )}
        </div>
      </div>
      <div className="video__descriptions">
        <h3>{videoInfo.snippet.title}</h3>
        <div className="video-infos">
          {isMobileOnly ? (
            <>
              {" "}
              <p className="channel-title"> {moment(new Date(videoInfo.snippet.publishedAt)).fromNow()}</p>
              <p>
                {videoStatics.length > 0 &&
                  totalViewsConverter(
                    videoStatics[findIndexById(videoStatics,videoInfo.id.videoId!)]?.items[0]?.statistics.viewCount
                  )}
                views
              </p>
            </>
          ) : (
            <div className="desktop__videoDetails">
              <div className="video__channel__details">
                <span>{videoInfo.snippet.channelTitle}</span>
                <span>
                  {videoStatics.length > 0 &&
                    totalViewsConverter(
                      videoStatics[findIndexById(videoStatics,videoInfo.id.videoId!)]?.items[0]?.statistics.viewCount
                    )}
                  views
                </span>
                <span>
                  {moment(new Date(videoInfo.snippet.publishedAt)).fromNow()}
                </span>
                <div className="descriptions">
                  <span>{videoInfo.snippet.description}</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
