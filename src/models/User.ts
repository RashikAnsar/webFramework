import { Model } from './Model';

/**
 * UserInfo type consists of name , age, id
 */
export interface UserInfo {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<UserInfo> {}
