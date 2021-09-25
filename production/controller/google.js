"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Google {
    authSuccess(req, res) {
        __1.Responser.good('Auth Google Success', res);
    }
    authError(req, res) {
        __1.Responser.bad('Auth Google Error', res);
    }
    authCallback(req, res) {
        __1.Jwt.encode(req._passport.session.user._json)
            .then(token => {
            __1.Logger.log(process.env.APP_FRONT_ORIGIN);
            res.redirect(process.env.APP_FRONT_ORIGIN + '/?token=' + token);
        });
    }
}
exports.default = new Google();
