import { Account } from "./auth.interface";
import Accounts from "./auth.model";

/**
 * Insert account
 */
const insertAccount = async (account: Account): Promise<any> => {
  return await Accounts.create(account);
};

export default {
  insertAccount,
};
