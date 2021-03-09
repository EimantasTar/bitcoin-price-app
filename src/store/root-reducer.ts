import { combineReducers } from 'redux';
import { bitcoinSlice } from './slices/bitcoin-slice';
import { documentSlice } from './slices/document-slice';

const rootReducer = combineReducers({
    bitcoin: bitcoinSlice.reducer,
    document: documentSlice.reducer
});

export default rootReducer;
