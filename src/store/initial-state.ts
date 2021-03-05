import { BitcoinState } from './types/bitcoin-state';

export interface IInitialState {
    bitcoin: BitcoinState
}

const initialState: IInitialState = {
    bitcoin: {
        isFetching: false,
        data: {
            isDataUploaded: false,
            isAscending: false,
            isDescending: false,
            bitcoinData: {
                time: {
                    updated: '',
                    updatedISO: '',
                    updateduk: '',
                    disclaimer: '',
                    chartName: ''
                },
                bpi: []
            }
        },
        error: null
    }
};

export default initialState;
