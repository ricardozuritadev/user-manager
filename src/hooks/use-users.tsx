import { useState } from 'react';

import { User } from '../types/user.type';

export const useUsers = (initialUsers: User[]) => {
  const [users, setUsers] = useState(initialUsers);

  const toggleUserActive = (userId: number) => {
    const newUsers = structuredClone(users);

    const userIndex = newUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) return;

    newUsers[userIndex].active = !newUsers[userIndex].active;

    setUsers(newUsers);
  };

  return { users, toggleUserActive };
};
