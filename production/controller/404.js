"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class NotFound {
    default(req, res) {
        __1.Responser.bad('Page not found', res, 404);
    }
}
exports.default = new NotFound();
