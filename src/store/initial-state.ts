import { BitcoinState } from './types/bitcoin-state';

export interface IInitialState {
    bitcoin: BitcoinState
}

const initialState: IInitialState = {
    bitcoin: {
        isFetching: false,
        data: {
            time: {
                updated: '',
                updatedISO: '',
                updateduk: '',
                disclaimer: '',
                chartName: ''
            },
            bpi: {
                USD: null,
                GBP: null,
                EUR: null,
            }
        },
        error: null
    }
};

export default initialState;
