"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Pokemon {
    random(req, res) {
        const random = __1.Random.number(1, 500);
        __1.Axios.get('https://pokeapi.co/api/v2/pokemon-form/' + random, '')
            .then((datas) => {
            __1.Responser.good(datas.data, res);
        })
            .catch(error => {
            __1.Logger.log(error);
            __1.Responser.bad(error, res);
        });
    }
}
exports.default = new Pokemon();
