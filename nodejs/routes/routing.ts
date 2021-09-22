
import { Express } from 'express'

import { Route } from '.'

class Routes {
    route(app: Express) {
        Route.Home.welcome(app, '/')
        Route.NotFound.default(app, '*')
    }
}


export default new Routes()
