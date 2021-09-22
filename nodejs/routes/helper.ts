
import { Express } from 'express'

class Routing {
    routing(app: Express, path: string) {
        return app.route(process.env.APP_API_URL + path)
    }
}

export default Routing
