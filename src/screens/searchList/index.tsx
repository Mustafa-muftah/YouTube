import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useAction } from "../../appState/Hooks/useAction";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import "./SearchResult.scss";
import Filter from "../../component/filters";
import Channel from "../../component/channel";
import Video from "../../component/video/Video";
import Spinner from "../../component/global/spinner/Spinner";
import { isDesktop, isMobile, isMobileOnly } from "react-device-detect";
import { SearchListType } from "../../types";
import { ProgressBar } from "../../component/global/progressBar";


export const SearchList: React.FC = () => {
  const { getYouTubeList } = useAction();
  const list = useTypeSelector((state) => state.search.searchList);
  const nextPageToken = useTypeSelector((state) => state.search.NextpageToken);
  const { isLoading } = useTypeSelector(
    (state) => state.global
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken , list ]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      getYouTubeList(undefined, nextPageToken);
    }
  };


  const renderChannelOrVideo = (list:SearchListType[]): ReactNode => {
    return list.map((item, index: number) => {
      if (item.id.videoId) {
        return (
          <Video
            key={`${item.id.videoId}${index}`}
            videoInfo={item}
            videoIndex={index}
          />
        );
      } else {
        return <Channel  key={`${item.id.channelId}${index}`} channelInfo={item} channelIndex={index} />;
      }
    });
  };

  return (
    // <div className="body">
  <>
  
     {isMobileOnly&&isLoading && SearchList.length===0 && <Spinner/>}
     {!isMobile && isLoading  && <ProgressBar/>}
      <div className="searchResult__container">
        <div className="filters__wrapper">
          <Filter />
        </div>
        <div className="searchResults__wrapper">
          <ul>{list.length > 0 && <li>{renderChannelOrVideo(list)}</li>}</ul>
        </div>
      </div>
      </>
    // </div>
  );
};
