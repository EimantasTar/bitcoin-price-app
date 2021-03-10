import * as React from 'react';
import * as reactRedux from 'react-redux'
import { shallow } from 'enzyme';
import { DocumentState } from '../../store/types/document-state';
import Analysis from '../Analysis';

const mockDispatch = jest.fn();
const initialState: DocumentState = {
    isFetching: false,
    data: {
        allUniqueTags: [],
        mostUsedTagInfo: {
            tagName: '',
            usedTimes: 0,
            path: '',
            count: 0
        },
    },
    error: null
};

const pendingState: DocumentState = {
    isFetching: true,
    data: {
        allUniqueTags: [],
        mostUsedTagInfo: {
            tagName: '',
            usedTimes: 0,
            path: '',
            count: 0
        },
    },
    error: null
};

const errorState: DocumentState = {
    isFetching: false,
    data: {
        allUniqueTags: [],
        mostUsedTagInfo: {
            tagName: '',
            usedTimes: 0,
            path: '',
            count: 0
        },
    },
    error: 'error'
};

const fullState: DocumentState = {
    isFetching: false,
    data: {
        allUniqueTags: [
            'head',
            'body',
            'title',
            'meta',
            'link',
            'script',
            'div',
            'a',
            'h1',
        ],
        mostUsedTagInfo: {
            count: 4,
            path: '/html/body/div/div',
            tagName: 'div',
            usedTimes: 22
        }
    },
    error: null
};

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: () => ({
        t: mockTranslation
    }),
}));

describe('Analysis', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    test('renders with initialState', () => {
        useSelectorMock.mockReturnValueOnce(initialState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Analysis />);
        const targetForm = wrapper.find('form').at(0);
        targetForm.simulate('submit', {
            preventDefault: () => {}
        });
        expect(wrapper).toBeTruthy();
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });

    test('renders with pendingState', () => {
        useSelectorMock.mockReturnValueOnce(pendingState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Analysis />);
        expect(wrapper).toBeTruthy();
    });

    test('renders with errorState', () => {
        useSelectorMock.mockReturnValueOnce(errorState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Analysis />);
        expect(wrapper).toBeTruthy();
    });

    test('renders with fullState', () => {
        useSelectorMock.mockReturnValueOnce(fullState);
        useDispatchMock.mockReturnValue(mockDispatch);
        const wrapper = shallow(<Analysis />);
        expect(wrapper).toBeTruthy();
    });
});
