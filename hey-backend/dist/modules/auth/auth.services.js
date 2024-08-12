"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_model_1 = __importDefault(require("./auth.model"));
/**
 * Insert account
 */
const insertAccount = async (account) => {
    return await auth_model_1.default.create(account);
};
exports.default = {
    insertAccount,
};
