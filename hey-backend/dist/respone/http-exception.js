"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException {
    constructor(status, message) {
        this.message = message;
        this.status = status;
    }
}
exports.default = HttpException;
