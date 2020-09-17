export interface ISearchItem {
  id: string;
  // etag: string;
  // kind: string;
  snippet: {
    publishedAt: string;
    // channelId: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        // width: number;
        // height: number;
      };
    };
    channelTitle?: string;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface IYoutubeSearch {
  items: [
    {
      id: {
        videoId: string;
      };
    },
  ];
}

export interface IYoutubeVideo {
  items: ISearchItem[];
}
