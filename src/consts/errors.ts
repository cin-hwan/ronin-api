import httpStatus from 'http-status'

export type ResponseError = {
    status: number
    code: string
    message: string
}

export const WRONG_PASSWORD: ResponseError = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E001',
    message: 'You have entered a wrong password. Please try again!'
}

export const MISSING_REFRESH_TOKEN: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E002',
    message: 'Missing refresh token'
}

export const INVALID_REFRESH_TOKEN: ResponseError = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E003',
    message: 'Invalid refresh token'
}

export const MISSING_ACCESS_TOKEN: ResponseError = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E004',
    message: 'Please login to continue'
}

export const INVALID_ACCESS_TOKEN: ResponseError = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E005',
    message: 'Invalid access token'
}

export const MISSING_USER_WALLET_NUMBER: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E006',
    message: 'Sorry, we cannot identify your wallet. Please contact administrators!'
}