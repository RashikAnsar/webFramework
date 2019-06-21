import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

// user.on('error', () => {
//   console.log(user);
// });

user.fetch();
