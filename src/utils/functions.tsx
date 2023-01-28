import { User } from '../types/user.type';

import UserRow from '../components/user-row';

export const paintUsers = (users: User[]) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return users.map(user => <UserRow key={user.username} {...user} />);
};
