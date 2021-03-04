import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from '../initial-state';
import { BITCOIN_URL } from '../../utils/constants/Urls';
import { BitcoinData } from '../types/bitcoin-state';

const sliceName = 'bitcoin';

export const getBitcoinPrice = createAsyncThunk<BitcoinData, null, { rejectValue: string }>(
    `${sliceName}/getBitcoinPrice`,
    async (_, { rejectWithValue }) => {
        try {
            const response: Response = await fetch(BITCOIN_URL);
            const result: BitcoinData = await response.json();
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
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBitcoinPrice.pending, ((state) => {
            state.isFetching = true;
            state.error = null;
        }));
        builder.addCase(getBitcoinPrice.fulfilled, ((state, { payload }) => {
            state.isFetching = false;
            state.data = payload;
        }));
        builder.addCase(getBitcoinPrice.rejected, ((state, { payload }) => {
            state.isFetching = false;
            state.error = payload;
        }))
    }
});

export const {} = bitcoinSlice.actions;
