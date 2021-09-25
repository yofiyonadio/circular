
import { Express } from 'express'
import passport from 'passport'

import Routing from '../helper'
import { Controller } from '../../'
import { Logger } from '../..'


class Google extends Routing {

    default(app: Express, path: string) {
        Logger.log(`${process.env.APP_ORIGIN}${process.env.APP_API_URL}/auth/google/error`)
        this.routing(app, path).get(passport.authenticate('google', { scope: ['profile', 'email'] }))
    }

    success(app: Express, path: string) {
        this.routing(app, path).get(Controller.Google.authSuccess)
    }

    error(app: Express, path: string) {
        this.routing(app, path).get(Controller.Google.authError)
    }

    callback(app: Express, path: string) {
        this.routing(app, path).get(passport.authenticate('google', { failureRedirect: `${process.env.APP_ORIGIN}${process.env.APP_API_URL}/auth/google/error` }), Controller.Google.authCallback)
    }

}

export default new Google()