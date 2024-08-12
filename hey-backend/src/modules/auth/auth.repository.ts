// import { Account } from "./auth.interface";
import Accounts from "./auth.model";
import { typeSearching } from "../../assets/enums";
import { Account } from "./auth.interface";

const findAccount = async (userName: String, type: typeSearching): Promise<Account | null> => {
  let query = `{"${type}" : "${userName}"}`;
  
  return await Accounts.findOne(JSON.parse(query));
};

export { findAccount };
