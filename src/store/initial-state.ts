import { BitcoinState } from './types/bitcoin-state';
import { DocumentState } from './types/document-state';

export interface IInitialState {
    bitcoin: BitcoinState
    document: DocumentState
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
                },
                bpi: []
            }
        },
        error: null
    },
    document: {
        isFetching: false,
        data: {
            allUniqueTags: [],
            mostUsedTagInfo: {
                tagName: '',
                usedTimes: 0,
                path: '',
                count: 0
            },
        },
        error: null
    }
};

export default initialState;
