import { Controller, Get } from "emvc-decorators";
import { NextFunction, Request, Response } from "express";
import { CURRENCIES, CURRENCY_CODE } from "../consts/currency";

@Controller('/global')
export default class GlobalController {
    @Get({
        path: '/configs'
    })
    getGlobalConfigs(req: Request, res: Response, next: NextFunction) {
        const configs = {
            currencies: CURRENCIES,
            baseCurrency: CURRENCY_CODE.USD
        }

        res.json(configs)
    }
}