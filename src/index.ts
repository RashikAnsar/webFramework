import { User } from './models/User';
import { Eventing } from './models/Eventing';

// Already existed user
const user1 = new User({ name: 'newName', age: 40 });
user1.events.on('change', () => {
  console.log('change');
});

user1.events.trigger('change');
