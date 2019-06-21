import { User } from './models/User';

const user = new User({});

user.set({ name: 'Jane', age: 24 });

console.log(user.get('name'));
console.log(user.get('age'));
