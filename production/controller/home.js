"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Home {
    welcome(req, res) {
        __1.Responser.good('Circular Test Server is Running, Enjoy :)', res);
    }
}
exports.default = new Home();
