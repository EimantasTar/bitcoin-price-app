import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../initial-state';
import {
    countTagUsageInEveryNode,
    findAllUniqueTags,
    findMostCommonlyUsedTag, longestPathWithMostUsage
} from '../../utils/functions/doc-analysis';
import { DocumentState } from '../types/document-state';
import { ERROR_MESSAGE } from '../../utils/constants/Other';


const sliceName = 'document';

export const getDocumentInfo = createAsyncThunk<string, string, { rejectValue: string }>(
    `${sliceName}/getBitcoinPrice`,
    async (url, { rejectWithValue }) => {
        try {
            const response: Response = await fetch(`http://dev.riawolf.com/xplicity/loader.php?url=${url}`);
            const text: string = await response.text();
            if (!text.includes(ERROR_MESSAGE)) {
                return text;
            } else throw new Error(ERROR_MESSAGE);
        } catch (error) {
            const { message }: { message: string } = error;
            return rejectWithValue(message);
        }
    }
);

export const documentSlice = createSlice({
    name: sliceName,
    initialState: initialState.document,
    reducers: {
        getDocumentInfoFailure: (state: DocumentState, { payload }: { payload: string }) => {
            state.isFetching = false;
            if (payload) {
                state.error = payload;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getDocumentInfo.pending, ((state) => {
            state.isFetching = true;
            state.error = null;
        }));
        builder.addCase(getDocumentInfo.fulfilled, ((state, { payload }) => {
            try {
                const parser: DOMParser = new DOMParser();
                const document: Document = parser.parseFromString(payload, 'text/html');
                const allTags: string[] = findAllUniqueTags(document);
                const mostUsedTag: { tagName: string, usedTimes: number } = findMostCommonlyUsedTag(allTags, document);
                const { tagName, usedTimes }: { tagName: string, usedTimes: number } = mostUsedTag;
                const res: { path: string, count: number }[] = countTagUsageInEveryNode(tagName, document);
                const result: { path: string, count: number } = longestPathWithMostUsage(res);
                const { path, count }: { path: string, count: number } = result;
                state.isFetching = false;
                state.data.allUniqueTags = allTags;
                state.data.mostUsedTagInfo.tagName = tagName;
                state.data.mostUsedTagInfo.usedTimes = usedTimes;
                state.data.mostUsedTagInfo.path = path;
                state.data.mostUsedTagInfo.count = count;
            } catch (error) {
                const { message }: { message: string } = error;
                getDocumentInfoFailureAction(message);
            }
        }));
        builder.addCase(getDocumentInfo.rejected, ((state, { payload }) => {
            state.isFetching = false;
            if (payload) {
                state.error = payload;
            }
        }));
    }
});

const { getDocumentInfoFailure: getDocumentInfoFailureAction } = documentSlice.actions;
