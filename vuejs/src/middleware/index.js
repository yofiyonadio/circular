import VueCookie from 'vue-cookie';
import jwt from "jsonwebtoken";

const secret = '$2a$12$ff.6epJcAXTsb28fNM.F1.DMeV9n/U8uWpsr.pGEmsnAY8y/hzZ5S'

class Middleware {

    auth(to, from, next, routeName) {
        if (to.query.token) {
            jwt.verify(to.query.token, secret, function (err, decoded) {
                if (err) {
                    next({ name: routeName })
                } else {
                    VueCookie.set('token', to.query.token, {
                        expires: false,
                    })
                    VueCookie.set('user', decoded, {
                        expires: false,
                    })
                    window.location.replace(window.location.origin);
                }
            })
        }

        const token = VueCookie.get('token')

        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
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
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                next()
            } else {
                next({ name: routeName })
            }
        })
    }

    verify(to, from, next) {

        if (to.path === '/google') {

            const token = VueCookie.get('token')

            if (token) {
                next({ name: 'Home' })
            } else {
                location.href = window.location.origin + '/api/auth/google'
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