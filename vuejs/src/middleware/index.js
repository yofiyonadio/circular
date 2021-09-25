import VueCookie from 'vue-cookie';
import jwt from "jsonwebtoken";
import { env } from '..'

const secret = '$2a$12$ff.6epJcAXTsb28fNM.F1.DMeV9n/U8uWpsr.pGEmsnAY8y/hzZ5S'

class Middleware {

    auth(to, from, next, routeName) {
        if (to.query.token) {
            jwt.verify(to.query.token, env.SECRET, (err, decoded) => {
                if (err) {
                    next({ name: routeName })
                } else {
                    VueCookie.set('token', to.query.token, {
                        expires: false,
                    })
                    VueCookie.set('user', JSON.stringify(decoded), {
                        expires: false,
                    })
                    console.log(env.APP_ORIGIN)
                    window.location.replace(env.APP_ORIGIN);
                }
            })
        }

        const token = VueCookie.get('token')

        if (token) {
            jwt.verify(token, env.SECRET, (err, decoded) => {
                if (err) {
                    next({ name: routeName })
                } else {
                    next()
                }
            })
        } else {
            next({ name: routeName })
        }
    }

    authBack(to, from, next, routeName) {
        var token = VueCookie.get('token')
        jwt.verify(token, env.SECRET, (err, decoded) => {
            if (err) {
                next()
            } else {
                next({ name: routeName })
            }
        })
    }

    verify(to, from, next) {
        console.log(env.APP_ORIGIN)
        console.log(VueCookie.get('user'))
        if (to.path === '/google') {
            const token = VueCookie.get('token')
            if (token) {
                next({ name: 'Home' })
            } else {
                location.href = env.API_ORIGIN + '/api/auth/google'
            }
        }

        const auth = to.matched.some(record => record.meta.auth)
        if (auth) {
            this.auth(to, from, next, 'Login')
        } else {
            if (to.path === '/login') {
                this.authBack(to, from, next, 'Home')
            } else {
                next()
            }
        }

    }
}

export default new Middleware()