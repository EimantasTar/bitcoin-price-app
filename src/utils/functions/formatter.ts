export const Formatter = {
    EUR: new Intl.NumberFormat('en-LT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    }),
    GBP: new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    }),
    USD: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
};
