import { View } from './View';
import { User, UserInfo } from '../models/User';

export class UserShow extends View<User, UserInfo> {
  template() {
    return `
    <div>
    <h1>User Detail</h1>
    <div>User Name: ${this.model.get('name')}</div>
    <div>Age: ${this.model.get('age')}</div>
    </div>
    `;
  }
}
