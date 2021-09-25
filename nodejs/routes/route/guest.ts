
import { Express } from 'express'
import passport from 'passport'

import Routing from '../helper'
import { Controller } from '../..'
import { Logger } from '../..'


class Guest extends Routing {

    auth(app: Express, path: string) {
        this.routing(app, path).get(Controller.Guest.auth)
    }

}

export default new Guest()