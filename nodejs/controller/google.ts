import { Response, Request } from 'express'

import { Responser, Logger, Jwt } from '..'

class Google {
    

    authSuccess(req: Request, res: Response) {
        Responser.good('Auth Google Success', res)
    }

    authError(req: Request, res: Response) {
        Responser.bad('Auth Google Error', res)
    }

    authCallback(req: Request, res: Response) {
        Jwt.encode((req as any)._passport.session.user._json)
        .then(token => {
            res.redirect('/?token=' + token)
        })
        
    }


}

export default new Google()
