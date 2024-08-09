"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRespone {
    constructor(status, message, data, total) {
        this.message = message;
        this.status = status;
        if (total) {
            this.total = total;
        }
        if (data) {
            this.data = data;
        }
    }
}
exports.default = HttpRespone;
