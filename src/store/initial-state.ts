import { BitcoinState } from './types/bitcoin-state';

export interface IInitialState {
    bitcoin: BitcoinState
}

const initialState: IInitialState = {
    bitcoin: {
        isFetching: false,
        data: [],
        error: null
    }
};

export default initialState;
