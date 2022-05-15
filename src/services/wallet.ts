import { Service } from "emvc-decorators";
import { CURRENCY_CODE } from "../consts/currency";

@Service()
export default class WalletService {
    private static _wallets = [{
        id: 1,
        no: '7300 3777 3888 3334',
        assets: [{
            currency: CURRENCY_CODE.USD,
            balance: 1000
        }, {
            currency: CURRENCY_CODE.EUR,
            balance: 50
        }, {
            currency: CURRENCY_CODE.YEN,
            balance: 10000
        }]
    }, {
        id: 2,
        no: '1234 5678 9101 1121',
        assets: [{
            currency: CURRENCY_CODE.USD,
            balance: 2000
        }, {
            currency: CURRENCY_CODE.EUR,
            balance: 500
        }, {
            currency: CURRENCY_CODE.YEN,
            balance: 20000
        }]
    }]

    getWalletByWalletNo(walletNo: string) {
        return WalletService._wallets.find(wallet => wallet.no === walletNo)
    }
}