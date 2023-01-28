import { render, cleanup } from "@testing-library/react";
import Video from "./index";
import * as moment from 'moment';
import * as utilis from "../../utils/index"


afterEach(cleanup);

jest.mock('moment', () => {
  return () => {
    return { fromNow: () => 'About 1 year ago' };
  };
});

const videoInfo = {
  id: { videoId: "123" },
  snippet: {
    title: "Test video",
    publishedAt: "2022-01-01T00:00:00Z",
    channelTitle: "Test channel",
    thumbnails: {
      high: {
        url: "http://test-image.jpg"
      }
    },
    description: "This is a test video"
  }
}  ;

const videosDetalis = [
  {
    items: [
      {
        contentDetails: {
          duration: "PT10M30S"
        }
      }
    ]
  }
];

const videoStatics = [
  {
    items: [
      {
        statistics: {
          viewCount: "1000"
        }
      }
    ]
  }
];


jest.mock("../../appState/Hooks/useAction", () => {
  return {
    useAction: () => {
      return {
        getYouTubeVideoDetails: jest.fn()
      };
    }
  };
});

jest.mock("../../appState/Hooks/useTypedSelector", () => {
  return {
    useTypeSelector: () => {
      return {
        videosDetalis,
        videoStatics
      };
    }
  };
});

// jest.spyOn(utilis,"totalViewsConverter").mockReturnValue("1000")

test("should render the video component with the correct data", () => {
  const { getByText } = render(<Video videoInfo={videoInfo as any} />);

  expect(getByText("Test video")).toBeTruthy();
  expect(getByText("Test channel")).toBeTruthy();
  expect(getByText("About 1 year ago")).toBeTruthy();
  // expect(getByText("1,000 views")).toBeTruthy();
  expect(getByText("This is a test video")).toBeTruthy();
});

