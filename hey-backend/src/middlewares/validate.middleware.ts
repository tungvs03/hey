import { NextFunction, Request, Response } from "express";
import { Auth } from "../modules/auth/auth.interface";
import { Exception } from "../respone/exception";
import { checkExistAccount } from "../modules/auth/auth.services";
import { typeSearching } from "../assets/enums";


export class ValidateMiddleware {

    public checkAccountSignUp = async (req: Request, res: Response, next: NextFunction) => {
        if ( !req.body ) {
            return Exception.ERR_DATA_REQUIRED();
        }

        const auth: Partial<Auth> = req.body
        const userName = auth.userName;
        const password = auth.password;
        const repassword = auth.repassword;

        //Check userName:
        if(!userName || !password || !repassword) {
            return Exception.ERR_DATA_REQUIRED();
        }

        //Check password and repassword:
        if(password !== repassword) {
            return Exception.ERR_DATA_NOT_MATCH();
        }

        next();
    }


    public checkAccountSignIn = async (req: Request, res: Response, next: NextFunction) => {
        
        if ( !req.body ) {
          return Exception.ERR_DATA_REQUIRED();
        }

        const auth: Partial<Auth> = req.body
        const userName = auth.userName;
        const password = auth.password;

        //Check userName:
        if(!userName || !password) {
            return Exception.ERR_DATA_REQUIRED();
        }
        
        next();
    }
}