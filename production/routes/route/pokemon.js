"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __importDefault(require("../helper"));
const __1 = require("../..");
class Pokemon extends helper_1.default {
    random(app, path) {
        this.routing(app, path).get(__1.Controller.Pokemon.random);
    }
}
exports.default = new Pokemon();
