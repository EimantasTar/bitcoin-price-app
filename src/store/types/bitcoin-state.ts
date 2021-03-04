interface Currency {
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
    bpi: {
        USD: Currency | null,
        GBP: Currency | null,
        EUR: Currency | null,
    }
}

export interface BitcoinState {
    isFetching: boolean,
    data: BitcoinData,
    error: null | string | Error
}
