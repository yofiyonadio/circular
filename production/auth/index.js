"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = exports.Oauth2 = void 0;
const oauth2_1 = __importDefault(require("./oauth2"));
exports.Oauth2 = oauth2_1.default;
const jwt_1 = __importDefault(require("./jwt"));
exports.Jwt = jwt_1.default;
