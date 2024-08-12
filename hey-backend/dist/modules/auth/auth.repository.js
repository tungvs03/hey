"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAccount = void 0;
// import { Account } from "./auth.interface";
const auth_model_1 = __importDefault(require("./auth.model"));
const findAccount = async (userName, type) => {
    let query = `{"${type}" : "${userName}"}`;
    return await auth_model_1.default.findOne(JSON.parse(query));
};
exports.findAccount = findAccount;
