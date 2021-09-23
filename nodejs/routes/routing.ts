
import { Express } from 'express'

import { Route } from '.'

class Routes {
    route(app: Express) {

        Route.Home.welcome(app, '/')
        Route.NotFound.default(app, '*')

        Route.Google.default(app, '/auth/google')
        Route.Google.success(app, '/auth/google/success')
        Route.Google.error(app, '/auth/google/error')
        Route.Google.callback(app, '/auth/google/callback')

    }
}

export default new Routes()
