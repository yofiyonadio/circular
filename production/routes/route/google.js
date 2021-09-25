"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const helper_1 = __importDefault(require("../helper"));
const __1 = require("../../");
class Google extends helper_1.default {
    default(app, path) {
        this.routing(app, path).get(passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
    }
    success(app, path) {
        this.routing(app, path).get(__1.Controller.Google.authSuccess);
    }
    error(app, path) {
        this.routing(app, path).get(__1.Controller.Google.authError);
    }
    callback(app, path) {
        this.routing(app, path).get(passport_1.default.authenticate('google', { failureRedirect: `${process.env.APP_ORIGIN}${process.env.APP_API_URL}/auth/google/error` }), __1.Controller.Google.authCallback);
    }
}
exports.default = new Google();
