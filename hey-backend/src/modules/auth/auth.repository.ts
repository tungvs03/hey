import {Account} from "./auth.interface";
import Accounts from "./auth.model";

/**
 * Insert account
 */
const insertAccount = (account: Account): Promise<any> => {
  return Accounts.create(account);
};

/**
 * Find accocunt
 */
const findAccount = async (filter: {} = {}, projection: any = null, options: {} = {}) => {

  return await Accounts.findOne(filter, projection, options);
  
}


export {
  insertAccount,
  findAccount
};
