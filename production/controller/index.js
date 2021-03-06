"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.Guest = exports.Google = exports.NotFound = exports.Home = void 0;
const home_1 = __importDefault(require("./home"));
exports.Home = home_1.default;
const _404_1 = __importDefault(require("./404"));
exports.NotFound = _404_1.default;
const google_1 = __importDefault(require("./google"));
exports.Google = google_1.default;
const guest_1 = __importDefault(require("./guest"));
exports.Guest = guest_1.default;
const pokemon_1 = __importDefault(require("./pokemon"));
exports.Pokemon = pokemon_1.default;
