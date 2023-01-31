import { SORT_OPTIONS } from '../constants/sort-options';
import { USER_ROLES } from '../constants/user-roles';

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
    case SORT_OPTIONS.NAME:
      return sortedUsers.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    case SORT_OPTIONS.ROLE:
      return sortedUsers.sort((a, b) => {
        if (a.role === b.role) return 0;
        if (a.role === USER_ROLES.TEACHER) return -1;
        if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
          return -1;
        return 1;
      });
    case SORT_OPTIONS.ACTIVE:
      return sortedUsers.sort((a, b) => {
        if (a.active === b.active) return 0;
        if (a.active && !b.active) return -1;
        return 1;
      });

    default:
      return sortedUsers;
  }
};
