import { User } from '../types/user.type';

export const filterUsersByName = (users: User[], search: string) => {
  if (!search) return [...users];

  const lowerCasedSearch = search.toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(lowerCasedSearch)
  );
};

export const filterActiveUsers = (users: User[], active: boolean) => {
  if (!active) return [...users];

  return users.filter(user => user.active);
};

export const sortUsers = (users: User[], sortBy: number) => {
  const sortedUsers = [...users];
  switch (sortBy) {
    case 1:
      return sortedUsers.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    default:
      return sortedUsers;
  }
};
