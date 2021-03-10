import { bitcoinSlice, getBitcoinPrice, ResultState } from '../bitcoin-slice';
import { BitcoinState } from '../../types/bitcoin-state';
import initialState from '../../initial-state';

const expectedPending: BitcoinState = {
    isFetching: true,
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
            bpi: []
        }
    },
    error: null
};

const result: ResultState = {
    time: {
        updated: 'string',
        updatedISO: 'string',
        updateduk: 'string',
        disclaimer: 'string',
        chartName: 'string'
    },
    bpi: {
        USD: {
            code: 'USD',
            symbol: 'symbol',
            rate: '56000.99',
            description: 'description',
            rate_float: 56000.99
        },
        GBP: {
            code: 'GBP',
            symbol: 'symbol',
            rate: '29000.99',
            description: 'description',
            rate_float: 29000.99
        },
        EUR: {
            code: 'EUR',
            symbol: 'symbol',
            rate: '45000.99',
            description: 'description',
            rate_float: 45000.99
        },
    }
};

const resultZeros: ResultState = {
    time: {
        updated: 'string',
        updatedISO: 'string',
        updateduk: 'string',
        disclaimer: 'string',
        chartName: 'string'
    },
    bpi: {
        USD: {
            code: 'USD',
            symbol: 'symbol',
            rate: '0',
            description: 'description',
            rate_float: 0
        },
        GBP: {
            code: 'GBP',
            symbol: 'symbol',
            rate: '0',
            description: 'description',
            rate_float: 0
        },
        EUR: {
            code: 'EUR',
            symbol: 'symbol',
            rate: '0',
            description: 'description',
            rate_float: 0
        },
    }
};

const expectedFulfilled: BitcoinState = {
    isFetching: false,
    data: {
        isDataUploaded: true,
        bitcoinData: {
            time: {
                updated: 'string',
                updatedISO: 'string',
                updateduk: 'string',
                disclaimer: 'string',
                chartName: 'string'
            },
            bpi: [
                {
                    code: 'EUR',
                    symbol: 'symbol',
                    rate: '45000.99',
                    description: 'description',
                    rate_float: 45000.99
                },
                {
                    code: 'GBP',
                    symbol: 'symbol',
                    rate: '29000.99',
                    description: 'description',
                    rate_float: 29000.99
                },
                {
                    code: 'USD',
                    symbol: 'symbol',
                    rate: '56000.99',
                    description: 'description',
                    rate_float: 56000.99
                },
            ]
        }
    },
    error: null
};

const expectedFulfilledNoCurrencies: BitcoinState = {
    isFetching: false,
    data: {
        isDataUploaded: true,
        bitcoinData: {
            time: {
                updated: 'string',
                updatedISO: 'string',
                updateduk: 'string',
                disclaimer: 'string',
                chartName: 'string'
            },
            bpi: []
        }
    },
    error: null
};

describe('bitcoinSlice', () => {
    it('getBitcoinPrice.pending returns new state "expectedPending"', () => {
        const actual: BitcoinState = bitcoinSlice.reducer(initialState.bitcoin, getBitcoinPrice.pending);
        expect(actual).toEqual(expectedPending);
    });

    it('getBitcoinPrice.fulfilled returns new state "expectedFulfilled"', () => {
        const actual: BitcoinState = bitcoinSlice.reducer(initialState.bitcoin, getBitcoinPrice.fulfilled(result, '', null));
        expect(actual).toEqual(expectedFulfilled);
    });

    it('getBitcoinPrice.fulfilled returns new state "expectedFulfilledNoCurrencies"', () => {
        const actual: BitcoinState = bitcoinSlice.reducer(initialState.bitcoin, getBitcoinPrice.fulfilled(resultZeros, '', null));
        expect(actual).toEqual(expectedFulfilledNoCurrencies);
    });
});
