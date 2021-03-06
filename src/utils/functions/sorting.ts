import { Currency } from '../../store/types/bitcoin-state';

export const sortArrAscending = (arr: Currency[]): Currency[] => {
    return arr.slice().sort((a, b) => {
        if (a.rate_float < b.rate_float)
            return -1;
        else if (a.rate_float === b.rate_float)
            return 0;
        else
            return 1
    });
};

export const sortArrDescending = (arr: Currency[]): Currency[] => {
    return arr.slice().sort((a, b) => {
        if (a.rate_float > b.rate_float)
            return -1;
        else if (a.rate_float === b.rate_float)
            return 0;
        else
            return 1
    });
};
