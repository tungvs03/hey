import {typeSearching} from "../../assets/enums";
import { Exception } from "../../respone/exception";
import {Auth} from "./auth.interface";
import {findAccount} from "./auth.repository";

const resgister = async ({account}: {account: Auth}) => {

    /*
        - Validate formData.
        - Check Account existed.
        - Create new account.
    */

    const {userName, password, repassword} = account;
    if(userName === "" || password === "" || repassword === "") {
        return Exception.ERR_BAD_REQUEST("Please enter all fields");
    }

    if(password !== repassword) {
        return Exception.ERR_BAD_REQUEST("Password and re-password do not match");
    }


    const accountExisted = await findAccount({userName: account.userName});

    if(accountExisted) {
        return Exception.ERR_BAD_REQUEST(`${account.userName} is already existed`);
    }




    // let query = `{"${type}" : "${userName}"}`;
    // return findAccount(query);

    // if(account) {
    //     return Exception.ERR_DATA_EXISTED(`${userName} is already existed`);
    // }
    // return true;
}

export {checkExistAccount, validateNewAccount};
