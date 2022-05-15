export const CURRENCY_CODE = {
    USD: 'usd',
    EUR: 'eur',
    YEN: 'yen',
    VND: 'vnd'
}

const S3_ASSET_FOLDER = 'https://ronin-app-demo.s3.ap-southeast-1.amazonaws.com/assets'

export const CURRENCIES = {
    [CURRENCY_CODE.USD]: {
        displayText: 'USD',
        img: `${S3_ASSET_FOLDER}/usd.png`,
        rate: 1
    },
    [CURRENCY_CODE.EUR]: {
        displayText: 'EUR',
        img: `${S3_ASSET_FOLDER}/eur.png`,
        rate: 1.04
    },
    [CURRENCY_CODE.YEN]: {
        displayText: 'YEN',
        img: `${S3_ASSET_FOLDER}/yen.png`,
        rate: 0.0077
    },
    [CURRENCY_CODE.VND]: {
        displayText: 'VND',
        rate: 0.000043
    }
}