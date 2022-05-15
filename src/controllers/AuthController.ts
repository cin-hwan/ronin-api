import { Controller, Inject, Post } from "emvc-decorators";
import { NextFunction, Request, Response } from "express";
import { MISSING_REFRESH_TOKEN } from "../consts/errors";
import AuthService from "../services/auth";

@Controller('/auth')
export default class AuthController {
    @Inject()
    authService!: AuthService

    @Post({
        path: '/login'
    })
    login(req: Request, res: Response, next: NextFunction) {
        try {
            const { password } = req.body
            const user = this.authService.getUserByPassword(password)
            const accessToken = this.authService.signAccessToken(user)
            // just using user info as payload for now, it should be the session id or some information to get the session info in real app
            const refreshToken = this.authService.signRefreshToken(user)
            res.json({
                user,
                accessToken,
                refreshToken
            })
        } catch (error) {
            next(error)
        }
    }

    @Post({
        path: '/refresh'
    })
    refreshToken(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.body
            if(!refreshToken) throw MISSING_REFRESH_TOKEN
            const result = this.authService.refreshToken(refreshToken)
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}