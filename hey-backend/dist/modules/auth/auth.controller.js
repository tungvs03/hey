"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_exception_1 = __importDefault(require("../../respone/http-exception"));
const auth_services_1 = __importDefault(require("./auth.services"));
const enums_1 = require("../../assets/enums");
const http_respone_1 = __importDefault(require("../../respone/http-respone"));
const auth_repository_1 = require("./auth.repository");
class AuthControllers {
    async register(req, res) {
        let auth = { ...req.body };
        //check that username exist or not;
        const account = await (0, auth_repository_1.findAccount)(auth.userName, enums_1.typeSearching.userName);
        if ((Array.isArray(account) && account.length) || (account && Object.keys(account).length)) {
            return res.status(400).send(new http_exception_1.default(400, `Tài khoản ${auth.userName} đã tồn tại trong hệ thống!`));
        }
        // Decrypt password:
        // const =
        //check password and rePassword:
        if (auth.password !== auth.repassword) {
            return res.status(400).send(new http_exception_1.default(400, "Mật khẩu nhập lại không đúng!"));
        }
        const saltRounds = 10;
        bcrypt_1.default.hash(auth.password.toString(), saltRounds, async function (err, hashingPassword) {
            if (err) {
                console.error(err);
            }
            const hashingAccount = {
                userName: auth.userName,
                password: hashingPassword,
                roles: [enums_1.Roles.USER],
            };
            const data = await auth_services_1.default.insertAccount(hashingAccount);
            if (!data) {
                return res.status(400).send(new http_respone_1.default(400, "Có lỗi khi tạo người dùng mới", data));
            }
            return res.status(201).send(new http_respone_1.default(201, "Tạo tài khoản mới thành công", data));
        });
    }
}
exports.AuthControllers = AuthControllers;
