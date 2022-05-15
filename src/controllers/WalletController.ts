import { Controller, Get, Inject, Post } from "emvc-decorators";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { MISSING_AMOUNT_IN_PAYLOAD, MISSING_ASSET_IN_PAYLOAD, MISSING_SOURCE_WALLET_NUMBER, MISSING_TARGET_WALLET_NUMBER, MISSING_USER_WALLET_NUMBER } from "../consts/errors";
import authenticate from "../middlewares/authenticate";
import WalletService from "../services/wallet";

@Controller('/wallet')
export default class WalletController {
    @Inject()
    walletService!: WalletService

    @Get({
        path: '/me',
        middlewares: [authenticate]
    })
    getMyWallet(req: Request, res: Response, next: NextFunction) {
        try {
            const { user } = res.locals
            if (!user.walletNo) throw MISSING_USER_WALLET_NUMBER
            const wallet = this.walletService.getWalletByWalletNo(user.walletNo)
            res.json(wallet)
        } catch (error) {
            next(error)
        }
    }

    @Post({
        path: '/send',
        middlewares: [authenticate]
    })
    sendAssets(req: Request, res: Response, next: NextFunction) {
        try {
            const payload = req.body
            if (!payload.from) throw MISSING_SOURCE_WALLET_NUMBER
            if (!payload.to) throw MISSING_TARGET_WALLET_NUMBER
            if (!payload.asset) throw MISSING_ASSET_IN_PAYLOAD
            if (!payload.amount) throw MISSING_AMOUNT_IN_PAYLOAD
            this.walletService.sendAssets(payload.from, payload.to, payload.asset, payload.amount)

            res.sendStatus(httpStatus.ACCEPTED)
        } catch (error) {
            next(error)
        }
    }
}