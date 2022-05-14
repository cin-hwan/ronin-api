import httpStatus from 'http-status'

export type ResponseError = {
    status: number
    code: string
    message: string
}

export const WRONG_PASSWORD = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E001',
    message: 'You have entered a wrong password. Please try again!'
}

export const MISSING_REFRESH_TOKEN = {
    status: httpStatus.BAD_REQUEST,
    code: 'E002',
    message: 'Missing refresh token'
}

export const INVALID_REFRESH_TOKEN = {
    status: httpStatus.UNAUTHORIZED,
    code: 'E003',
    message: 'Invalid refresh token'
}