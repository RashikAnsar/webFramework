import { User } from './models/User';
import { Eventing } from './models/Eventing';

const user = new User({ name: 'new record', age: 40 });

user.on('change', () => {
  console.log('change');
});

console.log(user.get('name'));

user.trigger('change');
