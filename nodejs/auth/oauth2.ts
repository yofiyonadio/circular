import { OAuth2Strategy } from 'passport-google-oauth'
import passport from 'passport'
import { Express } from 'express'

class Oauth2 {
    passport(app: Express) {

        passport.use(new OAuth2Strategy({
            clientID: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
        }, (accessToken, refreshToken, profile, done) => {
            return done(null, profile)
        }))

        app.use(passport.initialize())
        app.use(passport.session())

        passport.serializeUser((user, cb) => {
            cb(null, user)
        })

        passport.deserializeUser((obj, cb) => {
            cb(null, obj as any)
        })

        return passport
    }
}

export default new Oauth2()
