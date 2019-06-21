import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

/**
 * UserInfo type consists of name , age, id
 */
export interface UserInfo {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserInfo> = new Sync<UserInfo>(ROOT_URL);
  public attributes: Attributes<UserInfo>;

  constructor(attrs: UserInfo) {
    this.attributes = new Attributes<UserInfo>(attrs);
  }
}
