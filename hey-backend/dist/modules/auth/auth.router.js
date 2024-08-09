"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const authRouter = express_1.default.Router();
const authControllers = new auth_controller_1.AuthControllers();
authRouter
    .post("/", authControllers.register);
exports.default = authRouter;
