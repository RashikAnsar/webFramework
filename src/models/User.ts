import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface UserInfo {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<UserInfo> {
  static buildUser(attrs: UserInfo): User {
    return new User(
      new Attributes<UserInfo>(attrs),
      new Eventing(),
      new ApiSync<UserInfo>(ROOT_URL)
    );
  }

  static buildUserCollection(): Collection<User, UserInfo> {
    return new Collection<User, UserInfo>(ROOT_URL, (json: UserInfo) =>
      User.buildUser(json)
    );
  }
}
