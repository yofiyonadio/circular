import { Response, Request } from 'express'

import { Responser, Logger, Jwt } from '..'

class Guest {

    auth(req: Request, res: Response) {
        Jwt.encode({
            sub: '1111111111111',
            name: 'Guest',
            given_name: 'Guest',
            family_name: '',
            picture: 'https://lh3.googleusercontent.com/a-/AOh14Ggt2qdvf_0hQqbp1tcxR7kgXeOOYIFQT-HMNpVEiA=s96-c',
            email: 'guest@gmail.com',
            email_verified: false,
            locale: 'id',
        })
            .then(tokens => {
                Responser.good({
                    token: tokens,
                }, res)
            })
    }


}

export default new Guest()
