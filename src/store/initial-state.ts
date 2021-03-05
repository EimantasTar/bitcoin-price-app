import { BitcoinState } from './types/bitcoin-state';

export interface IInitialState {
    bitcoin: BitcoinState
}

const initialState: IInitialState = {
    bitcoin: {
        isFetching: false,
        data: {
            isDataUploaded: false,
            bitcoinData: {
                time: {
                    updated: '',
                    updatedISO: '',
                    updateduk: '',
                    disclaimer: '',
                    chartName: ''
                },
                bpi: {
                    USD: {
                        code: '',
                        symbol: '',
                        rate: '',
                        description: '',
                        rate_float: 0
                    },
                    GBP: {
                        code: '',
                        symbol: '',
                        rate: '',
                        description: '',
                        rate_float: 0
                    },
                    EUR: {
                        code: '',
                        symbol: '',
                        rate: '',
                        description: '',
                        rate_float: 0
                    },
                }
            }
        },
        error: null
    }
};

export default initialState;
