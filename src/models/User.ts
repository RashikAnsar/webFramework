import { Eventing } from './Eventing';
import { Sync } from './Sync';

/**
 * UserInfo type consists of name , age, id
 */
export interface UserInfo {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

/**
 * User class
 * @param {Object} data is object with name and age
 * @example new User({})
 * @example new User({name: 'John'})
 * @example new User({name: 'John', age: 20})
 */
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserInfo> = new Sync<UserInfo>(ROOT_URL);

  constructor(private data: UserInfo) {}

  /**
   * Get the values from user like name or age
   * @param {string} propName UserObjectKey name (or) age
   * @returns {string | number}
   */
  get(propName: string): number | string {
    return this.data[propName];
  }

  /**
   *
   * @param {Object} update is object with user and age keys
   * @example user.set({name: 'Jane', age: 24})
   * @example user.set({name: 'Jane'})
   * @example user.set({age: 20})
   */
  set(update: UserInfo): void {
    Object.assign(this.data, update);
  }

  // Event-Handling
}
