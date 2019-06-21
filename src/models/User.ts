import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

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

  // Passthrough methods

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // coordination methods

  set(update: UserInfo): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch wothout an id');
    }
    this.sync.fetch(id).then(
      (respose: AxiosResponse): void => {
        this.set(respose.data);
      }
    );
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(
        (respose: AxiosResponse): void => {
          this.trigger('save');
        }
      )
      .catch(() => {
        this.trigger('error');
      });
  }
}
