import { Response, Request } from 'express'

import { Responser, Logger } from '..'

class Google {

    authSuccess(req: Request, res: Response) {
        Responser.good('Auth Google Success', res)
    }

    authError(req: Request, res: Response) {
        Responser.bad('Auth Google Error', res)
    }

    authCallback(req: Request, res: Response) {
        // Logger.log((req as any)._passport.session.user._json)
        res.redirect(process.env.APP_API_URL + '/auth/google/success')
    }


}

export default new Google()
