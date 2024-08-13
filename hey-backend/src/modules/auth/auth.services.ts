import {typeSearching} from "../../assets/enums";
import {Account} from "./auth.interface";
import {findAccount} from "./auth.repository";

const checkExistAccount = (userName: String, type: typeSearching): Promise<Account | null> => {
    let query = `{"${type}" : "${userName}"}`;
    return findAccount(query);
};

export {checkExistAccount};
