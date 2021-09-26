"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("random"));
class Random {
    number(start, end) {
        return random_1.default.int(start, end);
    }
}
exports.default = new Random();
