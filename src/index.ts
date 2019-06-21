import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('change triggered');
});
user.on('click', () => {
  console.log('CLICK TRIGGERED');
});

user.trigger('change');
user.trigger('click');
user.trigger('unknown');
