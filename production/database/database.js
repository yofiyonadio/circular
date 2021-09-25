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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const __1 = require("..");
class Database {
    pool() {
        return __awaiter(this, void 0, void 0, function* () {
            return new pg_1.Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                port: process.env.DB_PORT,
            });
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pool()
                .then((clients) => __awaiter(this, void 0, void 0, function* () {
                clients.connect((error, client) => {
                    if (error) {
                        throw 'Database Connection Error!';
                    }
                    client.release();
                    __1.Logger.log('Database Connection success!', __1.Color.blue);
                });
            }));
        });
    }
    client(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.pool()
                    .then(clients => {
                    clients.connect((error, client) => __awaiter(this, void 0, void 0, function* () {
                        if (error) {
                            reject(error);
                        }
                        yield client.query(query)
                            .then(res => {
                            client.release();
                            resolve(res);
                        })
                            .catch(err => {
                            client.release();
                            reject(err);
                        });
                    }));
                });
            });
        });
    }
}
exports.default = new Database();
