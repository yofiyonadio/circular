"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Responser {
    good(datas, res) {
        const data = {
            'status': 200,
            'datas': datas,
        };
        res.status(200);
        res.json(data);
        res.end();
    }
    bad(datas, res, errorCode = 400) {
        const data = {
            'status': errorCode,
            'datas': datas,
        };
        res.status(errorCode);
        res.json(data);
        res.end();
    }
}
exports.default = new Responser();
