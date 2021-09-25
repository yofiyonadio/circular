"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const _1 = require(".");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.APP_PORT;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    optionsSuccessStatus: 200,
}));
_1.Oauth2.passport(app);
_1.Routes.route(app);
const staticPath = express_1.default.static(__dirname + '/public');
app.use(staticPath);
app.use((0, connect_history_api_fallback_1.default)({
    disableDotRule: true,
    verbose: true,
}));
app.use(staticPath);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield _1.Database.init()
        .then(() => {
        _1.Logger.log('---------------- Circular test server started on: -----------------', _1.Color.pink);
        _1.Logger.log('---------------------- http://localhost:' + port + ' ----------------------', _1.Color.green);
    });
}));
