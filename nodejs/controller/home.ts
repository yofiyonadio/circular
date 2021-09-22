import { Response, Request } from 'express'

import { Responser } from '..'

class Home {

    index(req: Request, res: Response) {

        Responser.good('Circular Test Server is Running, Enjoy :)', res)
    }

}

export default new Home()
