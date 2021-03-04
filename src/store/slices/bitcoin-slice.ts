import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initial-state';

const sliceName = 'bitcoin';

export const bitcoinSlice = createSlice({
    name: sliceName,
    initialState: initialState.bitcoin,
    reducers: {},
    extraReducers: {}
});

export const {} = bitcoinSlice.actions;
