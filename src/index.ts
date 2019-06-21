import { User } from './models/User';

// Already existed user
const user1 = new User({ id: 1 });
user1.set({ name: 'newName', age: 40 });
user1.save();

// new user
const user2 = new User({});
user2.set({ name: 'POST request', age: 10 });
user2.save();
