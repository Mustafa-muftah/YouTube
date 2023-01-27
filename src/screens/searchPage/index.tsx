import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useAction } from '../../appState/Hooks/useAction';
import { useTypeSelector } from '../../appState/Hooks/useTypedSelector';
import './SearchResult.scss';
import Filter from '../../component/filters';
import Channel from '../../component/channel';
import Video from '../../component/video';
import Spinner from '../../component/global/spinner';
import {  isMobile, isMobileOnly } from 'react-device-detect';
import { SearchListType } from '../../types';
import { ProgressBar } from '../../component/global/progressBar';

export const SearchPage: React.FC = () => {
	const { getYouTubeList } = useAction();
	const {searchList , searchInputValue , NextpageToken} = useTypeSelector((state) => state.search);
	const { isLoading } = useTypeSelector((state) => state.global);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		
	}, [NextpageToken]);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop >=
			document.documentElement.offsetHeight - 10  
		) {
			searchInputValue.length> 0 && getYouTubeList(undefined, NextpageToken);
		}
	};

	const renderChannelOrVideo = (list: SearchListType[]): ReactNode => {
		return list.map((item, index: number) => {
			if (item.id.videoId) {
				return (
					<Video
						key={`${item.id.videoId}${index}`}
						videoInfo={item}					/>
				);
			} else {
				return (
					<Channel
						key={`${item.id.channelId}${index}`}
						channelInfo={item}
					/>
				);
			}
		});
	};

	return (
		<>
			{isMobileOnly && isLoading && searchList.length === 0 && <Spinner />}
			{!isMobile && isLoading && <ProgressBar />}
			<div className="searchResult__container">
				<div className="filters__wrapper">
					<Filter />
				</div>
				<div className="searchResults__wrapper">
					{searchList.length > 0 && (
						<>{renderChannelOrVideo(searchList as SearchListType[])}</>
					)}
				</div>
			</div>
		</>
	);
};
