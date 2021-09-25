"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth_1 = require("passport-google-oauth");
const passport_1 = __importDefault(require("passport"));
class Oauth2 {
    passport(app) {
        passport_1.default.use(new passport_google_oauth_1.OAuth2Strategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        }, (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }));
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
        passport_1.default.serializeUser((user, cb) => {
            cb(null, user);
        });
        passport_1.default.deserializeUser((obj, cb) => {
            cb(null, obj);
        });
        return passport_1.default;
    }
}
exports.default = new Oauth2();
