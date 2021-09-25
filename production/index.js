"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = exports.Oauth2 = exports.Database = exports.Routes = exports.Controller = exports.Responser = exports.Color = exports.Logger = void 0;
const helper_1 = require("./helper");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return helper_1.Logger; } });
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return helper_1.Color; } });
const responser_1 = require("./responser");
Object.defineProperty(exports, "Responser", { enumerable: true, get: function () { return responser_1.Responser; } });
const Controller = __importStar(require("./controller"));
exports.Controller = Controller;
const routes_1 = require("./routes");
Object.defineProperty(exports, "Routes", { enumerable: true, get: function () { return routes_1.Routes; } });
const database_1 = __importDefault(require("./database"));
exports.Database = database_1.default;
const auth_1 = require("./auth");
Object.defineProperty(exports, "Oauth2", { enumerable: true, get: function () { return auth_1.Oauth2; } });
Object.defineProperty(exports, "Jwt", { enumerable: true, get: function () { return auth_1.Jwt; } });
