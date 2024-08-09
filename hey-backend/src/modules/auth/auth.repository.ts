import { Account } from "./auth.interface";
import Accounts from "./auth.model";

/**
 * Insert account
 */
const insertAccount = async (account: Account) => {
    await Accounts.create(account).then;
};

export default {
  insertAccount,
};
