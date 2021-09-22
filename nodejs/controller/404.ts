import { Response, Request } from 'express'

import { Responser } from '..'

class NotFound {

    notFound(req: Request, res: Response) {
        Responser.bad('Page not found', res, 404)
    }

}

export default new NotFound()
