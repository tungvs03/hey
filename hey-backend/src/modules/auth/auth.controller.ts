import {Request, Response} from "express";
import {Account, Auth} from "./auth.interface";
import bcrypt from "bcrypt";
import HttpException from "../../respone/http-exception";
import {Roles, typeSearching} from "../../assets/enums";
import HttpRespone from "../../respone/http-respone";
// import {checkExistAccount} from "./auth.services";
import {insertAccount} from "./auth.repository";

export class AuthControllers {

  public async register(req: Request, res: Response) {
    let auth: Auth = {...req.body};
    

    // const checkExistAccount = await checkExistAccount(auth.userName, typeSearching.userName);

    //check that username exist or not;
    // checkExistAccount(auth.userName, typeSearching.userName)
    //   .then(
    //     (dataReturn) => {
    //       if (dataReturn) {
    //         return res.status(400).send(new HttpException(400, "Tài khoản này đã tồn tại trong hệ thống!"));
    //       } else {
    //         if (auth.password !== auth.repassword) {
    //           return res.status(400).send(new HttpException(400, "Mật khẩu nhập lại không đúng!"));
    //         }
            
    //         const saltRounds = 10;
    //         bcrypt.hash(auth.password.toString(), saltRounds, async function (err, hashingPassword) {
    //           if (err) {
    //             console.error(err);
    //           }
              
    //           const hashingAccount: Account = {
    //             userName: auth.userName,
    //             password: hashingPassword,
    //             roles: [Roles.USER],
    //           };
              
    //           const data = insertAccount(hashingAccount)
    //             .then((dataReturn) => {
    //               return res.status(201).send(new HttpRespone(201, "Tạo người dùng mới thành công!", dataReturn))
    //             })
    //             .catch(
    //               (err) => {
    //                 return res.status(500).send(new HttpException(500, "Hệ thống xảy ra lỗi!"));
    //               }
    //             )
              
    //           if (!data) {
    //             return res.status(400).send(new HttpException(400, "Có lỗi khi tạo người dùng mới"));
    //           }
              
    //           return res.status(201).send(new HttpRespone(201, "Tạo tài khoản mới thành công", data));
    //         });
    //       }
    //     }
    //   )
    //   .catch(
    //     (err) => {
    //       return res.status(500).send(new HttpException(500, "Hệ thống xảy ra lỗi!"));
    //     }
      // )
  }
}

