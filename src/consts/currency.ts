export const CURRENCY_CODE = {
    USD: 'usd',
    EUR: 'eur',
    YEN: 'yen',
    VND: 'vnd'
}

export const CURRENCIES = {
    [CURRENCY_CODE.USD]: {
        displayText: 'USD',
        img: 'http://localhost:4000/static/usd.png', // should be an url to s3 object or other remote storage in production
        rate: 1
    },
    [CURRENCY_CODE.EUR]: {
        displayText: 'EUR',
        img: 'http://localhost:4000/static/eur.png',
        rate: 1.04
    },
    [CURRENCY_CODE.YEN]: {
        displayText: 'YEN',
        img: 'http://localhost:4000/static/yen.png',
        rate: 0.0077
    },
    [CURRENCY_CODE.VND]: {
        displayText: 'VND',
        rate: 0.000043
    }
}