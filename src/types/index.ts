export interface SearchListType {
  kind:          string;
  etag:          string;
  id:ID;
  snippet: Snippet;
  nextPageToken: string;
  regionCode:    string;
  pageInfo:      PageInfo;
  items:         SearchItems[];
}

export interface SearchItems {
  kind:    string;
  etag:    string;
  id:      ID;
  snippet: Snippet;
}

export interface ID {
  kind:       string;
  channelId?: string;
  videoId?:   string;
}

export interface Snippet {
  publishedAt:          Date;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  liveBroadcastContent: string;
  publishTime:          Date;
}

export interface Thumbnails {
  default: Default;
  medium:  Default;
  high:    Default;
}

export interface Default {
  url:     string;
  width?:  number;
  height?: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}

// Video details types

export interface VideoDetails {
  kind:     string;
  etag:     string;
  items:    Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind:           string;
  etag:           string;
  id:             string;
  contentDetails: ContentDetails;
}

export interface ContentDetails {
  duration:        string;
  dimension:       string;
  definition:      string;
  caption:         string;
  licensedContent: boolean;
  contentRating:   ContentRating;
  projection:      string;
}

export interface ContentRating {
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}

// Video Statistics

export interface VideoStatistics {
  kind:     string;
  etag:     string;
  items:    Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind:       string;
  etag:       string;
  id:         string;
  statistics: Statistics;
}

export interface Statistics {
  viewCount:     string;
  likeCount:     string;
  favoriteCount: string;
  commentCount:  string;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}


// Channel Types

export interface Channel {
  kind:     string;
  etag:     string;
  pageInfo: PageInfo;
  items:    ChannelItem[];
}

export interface ChannelItem {
  kind:       string;
  etag:       string;
  channelId:         string;
  statistics: Statistics;
}

export interface Statistics {
  viewCount:             string;
  subscriberCount:       string;
  hiddenSubscriberCount: boolean;
  videoCount:            string;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}