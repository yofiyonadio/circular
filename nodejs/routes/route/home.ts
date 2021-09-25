
import { Express } from 'express'
import Routing from '../helper'
import { Controller } from '../../'
import { Logger } from '../..'

class Home extends Routing {
    welcome(app: Express, path: string) {
        this.routing(app, path).get(Controller.Home.welcome)
        this.routing(app, path).post(Controller.Home.welcome)
        this.routing(app, path).put(Controller.Home.welcome)
        this.routing(app, path).delete(Controller.Home.welcome)
        this.routing(app, path).patch(Controller.Home.welcome)
    }
}

export default new Home()