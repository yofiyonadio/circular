"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("../helper"));
const __1 = require("../../");
class Home extends helper_1.default {
    welcome(app, path) {
        this.routing(app, path).get(__1.Controller.Home.welcome);
        this.routing(app, path).post(__1.Controller.Home.welcome);
        this.routing(app, path).put(__1.Controller.Home.welcome);
        this.routing(app, path).delete(__1.Controller.Home.welcome);
        this.routing(app, path).patch(__1.Controller.Home.welcome);
    }
}
exports.default = new Home();
