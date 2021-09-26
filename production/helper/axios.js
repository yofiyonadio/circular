"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Axios {
    config(urls, datas, methods) {
        return new Promise((resolve, reject) => {
            (0, axios_1.default)({
                method: methods,
                url: urls,
                timeout: 30000,
                data: datas,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => reject(error));
        });
    }
    get(url, data) {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'GET')
                .then(result => {
                resolve(result);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'POST')
                .then(result => {
                resolve(result);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
}
exports.default = new Axios();
