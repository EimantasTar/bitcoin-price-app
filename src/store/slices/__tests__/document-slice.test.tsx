import { documentSlice, getDocumentInfo, getDocumentInfoFailure } from '../document-slice';
import { DocumentState } from '../../types/document-state';
import initialState from '../../initial-state';
import { TEST_TEXT } from '../../../utils/constants/Other';

const expectedGetDocumentInfoFailure: DocumentState = {
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

const expectedPending: DocumentState = {
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

const expectedFulfilled: DocumentState = {
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
            'span',
            'br',
            'h2',
            'p',
            'strong',
            'form',
            'label',
            'input',
            'button',
            'i',
            'ol',
            'table',
            'thead',
            'tbody',
            'tr',
            'th',
            'td',
            'li',
            'h3',
            'ul',
            'img'
        ],
        mostUsedTagInfo: {
            count: 9,
            path: '/html/body/div/div/div/div',
            tagName: 'div',
            usedTimes: 62
        }
    },
    error: null
};


describe('documentSlice', () => {
    it('getDocumentInfoFailure reducer returns new state "expectedGetDocumentInfoFailure"', () => {
        const actual: DocumentState = documentSlice.reducer(initialState.document, getDocumentInfoFailure('error'));
        expect(actual).toEqual(expectedGetDocumentInfoFailure);
    });

    it('getDocumentInfoFailure no args reducer returns unchanged state', () => {
        const actual: DocumentState = documentSlice.reducer(initialState.document, getDocumentInfoFailure());
        expect(actual).toEqual(initialState.document);
    });

    it('getDocumentInfo.pending returns new state "expectedPending"', () => {
        const actual: DocumentState = documentSlice.reducer(initialState.document, getDocumentInfo.pending);
        expect(actual).toEqual(expectedPending);
    });

    it('getDocumentInfo.fulfilled returns new state "expectedFulfilled"', () => {
        const actual: DocumentState = documentSlice.reducer(initialState.document, getDocumentInfo.fulfilled(TEST_TEXT, '', null));
        expect(actual).toEqual(expectedFulfilled);
    });
});
