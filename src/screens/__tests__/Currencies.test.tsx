import * as React from 'react';
import * as reactRedux from 'react-redux'
import { shallow } from 'enzyme';
import Currencies from '../Currencies';
import { BitcoinState } from '../../store/types/bitcoin-state';


const mockDispatch = jest.fn();
const initialState: BitcoinState = {
    isFetching: false,
    data: {
        isDataUploaded: false,
        bitcoinData: {
            time: {
                updated: '',
                updatedISO: '',
                updateduk: '',
            },
            bpi: []
        }
    },
    error: null
};

const fullState: BitcoinState = {
    isFetching: false,
    data: {
        isDataUploaded: true,
        bitcoinData: {
            time: {
                updated: 'Mar 10, 2021 20:53:00 UTC',
                updatedISO: '2021-03-10T20:53:00+00:00',
                updateduk: 'Mar 10, 2021 at 20:53 GMT',
            },
            bpi: [
                {
                    code: 'EUR',
                    symbol: '&euro;',
                    rate: '47,351.5331',
                    description: 'Euro',
                    rate_float: 47351.5331
                },
                {
                    code: 'GBP',
                    symbol: '&pound;',
                    rate: '40,514.4362',
                    description: 'British Pound Sterling',
                    rate_float: 40514.4362
                },
                {
                    code: 'USD',
                    symbol: '&#36;',
                    rate: '56,448.0183',
                    description: 'United States Dollar',
                    rate_float: 56448.0183
                }
            ]
        }
    },
    error: null
};

const pendingState: BitcoinState = {
    isFetching: true,
    data: {
        isDataUploaded: false,
        bitcoinData: {
            time: {
                updated: '',
                updatedISO: '',
                updateduk: '',
            },
            bpi: []
        }
    },
    error: null
};

const errorState: BitcoinState = {
    isFetching: false,
    data: {
        isDataUploaded: false,
        bitcoinData: {
            time: {
                updated: '',
                updatedISO: '',
                updateduk: '',
            },
            bpi: []
        }
    },
    error: 'error'
};

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: mockTranslation
    }),
}));

describe('Currencies', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    // eslint-disable-next-line prefer-const
    let useEffect: { mockImplementationOnce: (arg0: (f: any) => any) => void; };
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    useEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(mockUseEffect);

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });
    test('renders with initialState', () => {
        useSelectorMock.mockReturnValueOnce(initialState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Currencies />);
        expect(wrapper).toBeTruthy();
    });

    test('renders with fullState', () => {
        useSelectorMock.mockReturnValueOnce(fullState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Currencies />);
        expect(wrapper).toBeTruthy();
    });

    test('renders with pendingState', () => {
        useSelectorMock.mockReturnValueOnce(pendingState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Currencies />);
        expect(wrapper).toBeTruthy();
    });

    test('renders with errorState', () => {
        useSelectorMock.mockReturnValueOnce(errorState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Currencies />);
        expect(wrapper).toBeTruthy();
    });
});
