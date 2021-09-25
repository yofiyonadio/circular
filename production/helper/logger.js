"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    log(log, color) {
        // tslint:disable-next-line: no-console
        if (color)
            console.log(chalk_1.default.hex(color)(log));
        // tslint:disable-next-line: no-console
        else
            console.log(log);
    }
}
exports.default = new Logger();
