import { ActionCreatorWithoutPayload, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from '../initial-state';
import { BITCOIN_URL } from '../../utils/constants/Urls';
import { Currency } from '../types/bitcoin-state';
import { sortArrAscending, sortArrDescending } from '../../utils/functions/sorting';

const sliceName = 'bitcoin';

export interface ResultState {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string,
        disclaimer: string,
        chartName: string
    },
    bpi: {
        USD: Currency,
        GBP: Currency,
        EUR: Currency,
    }
}

export const getBitcoinPrice = createAsyncThunk<ResultState, null, { rejectValue: string }>(
    `${sliceName}/getBitcoinPrice`,
    async (_, { rejectWithValue }) => {
        try {
            const response: Response = await fetch(BITCOIN_URL);
            const result: ResultState = await response.json();
            return result;
        } catch (error) {
            const { message }: { message: string } = error;
            return rejectWithValue(message);
        }
    }
);

export const bitcoinSlice = createSlice({
    name: sliceName,
    initialState: initialState.bitcoin,
    reducers: {
        ascending: (state) => {
            const { bpi }: { bpi: Currency[] } = state.data.bitcoinData
            if (bpi && bpi.length > 1) {
                state.data.isAscending = true;
                state.data.isDescending = false;
                state.data.bitcoinData.bpi = sortArrAscending(bpi);
            }
        },
        descending: (state) => {
            const { bpi }: { bpi: Currency[] } = state.data.bitcoinData
            if (bpi && bpi.length > 1) {
                state.data.isAscending = false;
                state.data.isDescending = true;
                state.data.bitcoinData.bpi = sortArrDescending(bpi);
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getBitcoinPrice.pending, ((state) => {
            state.isFetching = true;
            state.error = null;
        }));
        builder.addCase(getBitcoinPrice.fulfilled, ((state, { payload: { time, bpi: { EUR, GBP, USD } } }) => {
            const { isDescending, isAscending }: { isDescending: boolean, isAscending: boolean } = state.data;
            let arr: Currency[] = [];
            if (EUR && EUR.rate_float > 0) {
                arr.push(EUR);
            }
            if (GBP && GBP.rate_float > 0) {
                arr.push(GBP);
            }
            if (USD && USD.rate_float > 0) {
                arr.push(USD);
            }
            if (isAscending) {
                arr = sortArrAscending(arr);
            }
            if (isDescending) {
                arr = sortArrDescending(arr);
            }
            state.isFetching = false;
            state.data.bitcoinData.time = time;
            state.data.isDataUploaded = true;
            state.data.bitcoinData.bpi = arr;
        }));
        builder.addCase(getBitcoinPrice.rejected, ((state, { payload }) => {
            state.isFetching = false;
            if (payload) {
                state.error = payload;
            }
        }))
    }
});

export const {
    ascending,
    descending
}: {
    ascending: ActionCreatorWithoutPayload
    descending: ActionCreatorWithoutPayload
} = bitcoinSlice.actions;
