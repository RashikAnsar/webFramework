/**
 * Example based development
 *
 * @TODO refactor to reusable code.
 */

/**
 * UserInfo type consists of name and age
 */
interface UserInfo {
  name?: string;
  age?: number;
}

type Callback = () => void;

/**
 * User class
 * @param {Object} data is object with name and age
 * @example new User({})
 * @example new User({name: 'John'})
 * @example new User({name: 'John', age: 20})
 */
export class User {
  events: { [key: string]: Callback[] } = {};

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
  /**
   * `on` is the method for adding event listener
   * @param {string} eventName name of the event
   * @param {function} callback callback fn()
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
