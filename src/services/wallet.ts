import { Service } from "emvc-decorators";
import { CURRENCY_CODE } from "../consts/currency";
import { INSUFFICIENT_AMOUNT, SOURCE_WALLET_NOT_FOUND, TARGET_WALLET_NOT_FOUND } from "../consts/errors";

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

    sendAssets(from: string, to: string, asset: string, amount: number) {
        const sourceWallet = WalletService._wallets.find(wallet => wallet.no === from)
        const targetWallet = WalletService._wallets.find(wallet => wallet.no === to)
        if (!sourceWallet) throw SOURCE_WALLET_NOT_FOUND
        if (!targetWallet) throw TARGET_WALLET_NOT_FOUND

        const sourceAsset = sourceWallet?.assets.find(a => a.currency === asset)
        const targetAsset = targetWallet?.assets.find(a => a.currency === asset) || {
            currency: asset,
            balance: 0
        }
        if (!sourceAsset || sourceAsset.balance < amount) throw INSUFFICIENT_AMOUNT
        sourceAsset.balance -= amount
        targetAsset.balance += amount
    }
}