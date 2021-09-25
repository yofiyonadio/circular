
import { Express } from 'express'

import Routing from '../helper'

import { Controller } from '../../'

class NotFound extends Routing {
    default(app: Express, path: string) {
        this.routing(app, path).get(Controller.NotFound.default)
        this.routing(app, path).post(Controller.NotFound.default)
        this.routing(app, path).put(Controller.NotFound.default)
        this.routing(app, path).delete(Controller.NotFound.default)
        this.routing(app, path).patch(Controller.NotFound.default)
    }
}

export default new NotFound()