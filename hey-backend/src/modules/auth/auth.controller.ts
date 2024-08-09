import { Request, Response } from "express";
import { Auth, Account } from "./auth.interface";
import bcrypt from "bcrypt";
import HttpException from "../../respone/http-exception";
import Accounts from "./auth.model";
import authRepo from "./auth.repository";
import { Roles } from "../../assets/role.enums";
import HttpRespone from "../../respone/http-respone";

export class AuthControllers {
  public async register(req: Request, res: Response) {
    let auth: Auth = { ...req.body };

    //check that username exist or not;
    const account = await Accounts.findOne({ userName: auth.userName.toString() }).exec();

    if ((Array.isArray(account) && account.length) || (account && Object.keys(account).length)) {
      return res.status(400).send(new HttpException(400, `User name ${auth.userName} already existed!`));
    }

    //check password and repassword:
    if (auth.password !== auth.repassword) {
        return res.status(400).send(new HttpException(400, "Password and repassword is not match!"));
    }

    const saltRounds = 10;
    bcrypt.hash(auth.password.toString(), saltRounds, async function (err, hashingPassword) {
      if (err) {
        console.error(err);
      }

      const hashingAccount: Account = {
        userName: auth.userName,
        password: hashingPassword,
        role: [Roles.USER],
      };
      
      const data = await authRepo.insertAccount(hashingAccount);

      if (!data) {
        return res.status(400).send(new HttpRespone(400, "Có lỗi khi tạo người dùng mới", data));
      }

      return res.status(201).send(new HttpRespone(201, "Tạo tài khoản mới thành công", data));
    });
  }
}
