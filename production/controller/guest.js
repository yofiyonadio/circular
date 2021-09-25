"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Guest {
    auth(req, res) {
        __1.Jwt.encode({
            sub: '1111111111111',
            name: 'Guest',
            given_name: 'Guest',
            family_name: '',
            picture: 'https://lh3.googleusercontent.com/a-/AOh14Ggt2qdvf_0hQqbp1tcxR7kgXeOOYIFQT-HMNpVEiA=s96-c',
            email: 'guest@gmail.com',
            email_verified: false,
            locale: 'id',
        })
            .then(tokens => {
            __1.Responser.good({
                token: tokens,
            }, res);
        });
    }
}
exports.default = new Guest();
