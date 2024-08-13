import {Account} from "./auth.interface";
import Accounts from "./auth.model";

/**
 * Insert account
 */
const insertAccount = (account: Account): Promise<any> => {
  return Accounts.create(account);
};

/**
 * Find acocunt
 */
const findAccount = (query: string): Promise<any> => {
  return Accounts.findOne(JSON.parse(query));
}


export {
  insertAccount,
  findAccount
};
