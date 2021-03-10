export interface Currency {
    code: string,
    symbol: string,
    rate: string,
    description: string,
    rate_float: number
}

export interface BitcoinData {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string,
        disclaimer: string,
        chartName: string
    },
    bpi: Currency[]
}

export interface BitcoinState {
    isFetching: boolean,
    data: {
        isDataUploaded: boolean,
        bitcoinData: BitcoinData
    },
    error: null | string | Error
}
