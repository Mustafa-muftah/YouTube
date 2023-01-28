import { render } from '@testing-library/react';
import Channel from './index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as utilis from "../../utils/index"
import axios from 'axios';


const mockStore = configureMockStore([thunk]);

const channelInfo = {
    id: { channelId: '123' },
    snippet: {
        channelTitle: 'Test Channel',
        thumbnails: {
            high: {
                url: 'http://test-image.jpg'
            }
        }
    }
};

const channelDetails = [
    {
        id: '123',
        items: [
            {
                statistics: {
                    videoCount: '100',
                    subscriberCount: '1000'
                }
            }
        ]
    }
];

jest.spyOn(utilis,"findIndexById").mockReturnValue(0)
jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: {} }));


const store = mockStore({
    search: {
        channelDetails
    }
});


describe('channel tests', () => {
    beforeEach(() => {
        jest.mock('./index', () => {
            const original = jest.requireActual('./index')
            return {
              ...original,
              totalSubscriptionConverter: jest.fn(() => 1000)
            }
          });    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('renders the channel title and thumbnail', () => {
        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <Channel channelInfo={channelInfo} />
            </Provider>
        );

        expect(getByText('Test Channel')).toBeInTheDocument();
        expect(getByAltText('channel-thumb')).toBeInTheDocument();
    });

    it('displays the number of videos ', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Channel channelInfo={channelInfo} />
            </Provider>
        );
        expect(getByText('100 videos')).toBeInTheDocument();
    });

});
