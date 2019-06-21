import axios, { AxiosResponse } from 'axios';

/**
 * Example based development
 *
 * @TODO refactor to reusable code.
 */

/**
 * UserInfo type consists of name , age, id
 */
interface UserInfo {
  id?: number;
  name?: string;
  age?: number;
}

/**
 * User class
 * @param {Object} data is object with name and age
 * @example new User({})
 * @example new User({name: 'John'})
 * @example new User({name: 'John', age: 20})
 */
export class User {
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
   * fetches the user from the db.json(server)
   */
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  /**
   * save user in the db.json(server)
   */
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users/', this.data);
    }
  }
}
