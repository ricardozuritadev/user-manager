import { useState } from 'react';

import { User } from '../types/user.type';

export const useUsers = (initialUsers: User[]) => {
  const [users, setUsers] = useState(initialUsers);

  return { users };
};
