const array = [
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
    {
        code: 'OTHER',
        symbol: 'symbol',
        rate: '56000.99',
        description: 'description',
        rate_float: 56000.99
    }
];

const resultAsc = [
    {
        code: 'GBP',
        symbol: 'symbol',
        rate: '29000.99',
        description: 'description',
        rate_float: 29000.99
    },
    {
        code: 'EUR',
        symbol: 'symbol',
        rate: '45000.99',
        description: 'description',
        rate_float: 45000.99
    },
    {
        code: 'USD',
        symbol: 'symbol',
        rate: '56000.99',
        description: 'description',
        rate_float: 56000.99
    },
    {
        code: 'OTHER',
        symbol: 'symbol',
        rate: '56000.99',
        description: 'description',
        rate_float: 56000.99
    }
];

const resultDes = [
    {
        code: 'USD',
        symbol: 'symbol',
        rate: '56000.99',
        description: 'description',
        rate_float: 56000.99
    },
    {
        code: 'OTHER',
        symbol: 'symbol',
        rate: '56000.99',
        description: 'description',
        rate_float: 56000.99
    },
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
];

describe('Sorting functions', () => {
    test('sortArrAscending', () => {
        const actual = require('../sorting').sortArrAscending(array);
        expect(actual).toEqual(resultAsc);
    });

    test('sortArrDescending', () => {
        const actual = require('../sorting').sortArrDescending(array);
        expect(actual).toEqual(resultDes);
    });
});
