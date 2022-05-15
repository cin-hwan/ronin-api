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
    message: 'Please sign in to continue'
}

export const INVALID_ACCESS_TOKEN: ResponseError = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E005',
    message: 'Invalid access token'
}

export const MISSING_USER_WALLET_NUMBER: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E006',
    message: 'User wallet number not found'
}

export const MISSING_SOURCE_WALLET_NUMBER: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E007',
    message: 'Missing source wallet number'
}

export const MISSING_TARGET_WALLET_NUMBER: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E008',
    message: "Please enter receiver's wallet number"
}

export const MISSING_ASSET_IN_PAYLOAD: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E009',
    message: 'Please select an asset'
}

export const MISSING_AMOUNT_IN_PAYLOAD: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E010',
    message: 'Please enter sending amount'
}

export const SOURCE_WALLET_NOT_FOUND: ResponseError = {
    status: httpStatus.NOT_FOUND,
    code: 'E011',
    message: 'Source wallet not found'
}

export const TARGET_WALLET_NOT_FOUND: ResponseError = {
    status: httpStatus.NOT_FOUND,
    code: 'E012',
    message: 'Target wallet not found'
}

export const INSUFFICIENT_AMOUNT: ResponseError = {
    status: httpStatus.BAD_REQUEST,
    code: 'E013',
    message: 'Insufficient amount'
}