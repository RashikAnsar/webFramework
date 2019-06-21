import { CollectionView } from './CollectionView';
import { User, UserInfo } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserInfo> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
