import { NextFunction, Request, Response } from "express"
import { ResponseError } from "../consts/errors"

const errorHandler = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
    if (!err) return next()
    res.status(err.status).json(err)
}

export default errorHandler