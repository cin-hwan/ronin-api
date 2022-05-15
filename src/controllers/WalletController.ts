import { Controller, Get, Inject } from "emvc-decorators";
import { NextFunction, Request, Response } from "express";
import { MISSING_USER_WALLET_NUMBER } from "../consts/errors";
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
}