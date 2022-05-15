import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import APP_CONFIGS from "../consts/configs"
import { INVALID_ACCESS_TOKEN, MISSING_ACCESS_TOKEN } from "../consts/errors"

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        const accessToken = authorizationHeader?.split(' ')[1]
        if (!accessToken) throw MISSING_ACCESS_TOKEN
        try {
            const user = verify(accessToken, APP_CONFIGS.JWT_SECRET)
            res.locals.user = user
        } catch (error) {
            console.error(error)
            throw INVALID_ACCESS_TOKEN
        }
        next()
    } catch (error) {
        next(error)
    }
}

export default authenticate