"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Routes {
    route(app) {
        _1.Route.Home.welcome(app, '/');
        _1.Route.Google.default(app, '/auth/google');
        _1.Route.Google.success(app, '/auth/google/success');
        _1.Route.Google.error(app, '/auth/google/error');
        _1.Route.Google.callback(app, '/auth/google/callback');
        _1.Route.NotFound.default(app, '*');
    }
}
exports.default = new Routes();
