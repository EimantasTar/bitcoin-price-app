import { combineReducers } from 'redux';
import { bitcoinSlice } from './slices/bitcoin-slice';

const rootReducer = combineReducers({
    bitcoin: bitcoinSlice.reducer,
});

export default rootReducer;
