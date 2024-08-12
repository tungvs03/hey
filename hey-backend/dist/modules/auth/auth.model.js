"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const accountSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        minLength: 8,
        required: true,
    },
    roles: {
        type: [String],
    },
    userId: {
        type: mongoose_1.default.Types.ObjectId,
    },
}, {
    timestamps: true,
    collection: "Accounts",
    toJSON: { getters: true },
    toObject: { getters: true },
});
// Tạo getter cho `createdAt` và `updatedAt` để chuyển đổi thành Unix time
accountSchema.path('createdAt').get(function (v) {
    return Math.floor(v.getTime() / 1000);
});
accountSchema.path('updatedAt').get(function (v) {
    return Math.floor(v.getTime() / 1000);
});
const Accounts = mongoose_1.default.model('Accounts', accountSchema);
exports.default = Accounts;
