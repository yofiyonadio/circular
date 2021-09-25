"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routing {
    routing(app, path) {
        return app.route(process.env.APP_API_URL + path);
    }
}
exports.default = Routing;
