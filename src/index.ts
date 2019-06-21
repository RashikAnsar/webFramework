import { User } from './models/User';

const user = new User({ id: 2, name: 'newer Name', age: 43 });

user.on('save', () => {
  console.log(user);
});

user.on('error', () => {
  console.log(user);
});

user.save();
