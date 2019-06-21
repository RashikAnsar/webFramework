import axios, { AxiosResponse } from 'axios';

import { User, UserInfo } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootURL: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootURL).then((response: AxiosResponse) => {
      response.data.forEach((value: UserInfo) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger('change');
    });
  }
}
