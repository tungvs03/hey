"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    try {
        const URI = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/HeyApplication";
        const db = mongoose_1.default.connect(URI);
        console.log("Connect DB success");
        return db;
    }
    catch (err) {
        throw new Error(err.toString());
    }
};
exports.default = connectDB;
