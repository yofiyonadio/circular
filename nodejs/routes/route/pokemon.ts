
import { Express } from 'express'

import Routing from '../helper'
import { Controller } from '../..'


class Pokemon extends Routing {

    random(app: Express, path: string) {
        this.routing(app, path).get(Controller.Pokemon.random)
    }

}

export default new Pokemon()