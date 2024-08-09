"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_exception_1 = __importDefault(require("../../respone/http-exception"));
const auth_model_1 = __importDefault(require("./auth.model"));
const auth_repository_1 = __importDefault(require("./auth.repository"));
const role_enums_1 = require("../../assets/role.enums");
const http_respone_1 = __importDefault(require("../../respone/http-respone"));
class AuthControllers {
    async register(req, res) {
        let auth = { ...req.body };
        //check that username exist or not;
        const account = await auth_model_1.default.findOne({ userName: auth.userName.toString() }).exec();
        if ((Array.isArray(account) && account.length) || (account && Object.keys(account).length)) {
            return res.status(400).send(new http_exception_1.default(400, `User name ${auth.userName} already existed!`));
        }
        //check password and repassword:
        if (auth.password !== auth.repassword) {
            return res.status(400).send(new http_exception_1.default(400, "Password and repassword is not match!"));
        }
        const saltRounds = 10;
        bcrypt_1.default.hash(auth.password.toString(), saltRounds, async function (err, hashingPassword) {
            if (err) {
                console.error(err);
            }
            const hashingAccount = {
                userName: auth.userName,
                password: hashingPassword,
                role: [role_enums_1.Roles.USER],
            };
            const data = await auth_repository_1.default.insertAccount(hashingAccount);
            if (!data) {
                return res.status(400).send(new http_respone_1.default(400, "Có lỗi khi tạo người dùng mới", data));
            }
            return res.status(201).send(new http_respone_1.default(201, "Tạo tài khoản mới thành công", data));
        });
    }
}
exports.AuthControllers = AuthControllers;
