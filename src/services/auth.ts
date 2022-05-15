import { Service } from "emvc-decorators";
import { sign as signJwt, verify } from 'jsonwebtoken';
import APP_CONFIGS from "../consts/configs";
import { CURRENCY_CODE } from "../consts/currency";
import { INVALID_REFRESH_TOKEN, WRONG_PASSWORD } from "../consts/errors";

@Service()
export default class AuthService {
    private _user = {
        id: 1,
        name: 'Hoan Than',
        walletNo: '7300 3777 3888 3334',
        localCurrency: CURRENCY_CODE.VND
    }

    getUserByPassword(password: string) {
        if (password !== '123456') throw WRONG_PASSWORD
        return this._user
    }

    signAccessToken(payload: any) {
        return signJwt(payload, APP_CONFIGS.JWT_SECRET, {
            expiresIn: 15 * 60 // 15 minutes
        })
    }

    signRefreshToken(payload: any) {
        return signJwt(payload, APP_CONFIGS.JWT_SECRET, {
            expiresIn: 24 * 60 * 60 // 24 hours
        })
    }

    refreshToken(token: string) {
        try {
            const payload = verify(token, APP_CONFIGS.JWT_SECRET)
            // [TODO]: get user id from payload to fetch user info from the db
            const accessToken = this.signAccessToken(this._user)
            const refreshToken = this.signRefreshToken(this._user)
            return {
                user: this._user,
                accessToken,
                refreshToken
            }
        } catch (error) {
            console.log(error) // log into file instead
            throw INVALID_REFRESH_TOKEN
        }
    }
}