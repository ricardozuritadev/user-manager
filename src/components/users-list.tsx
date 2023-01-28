import { paintUsers } from '../utils/functions';
import { useFilters } from '../hooks/useFilters';

import { User } from '../types/user.type';

import UsersListFilters from './users-list-filters';

type UsersListProps = {
  users: User[];
};

const UsersList = ({ users }: UsersListProps) => {
  const { search, activeOnly, sortBy, ...setFiltersFunctions } = useFilters();

  let filteredUsers = filterActiveUsers(users, activeOnly);
  filteredUsers = filterUsersByName(filteredUsers, search);
  filteredUsers = sortUsers(filteredUsers, sortBy);

  return (
    <div className="c-user-list">
      <h1 className="c-user-list__title">Listado de usuarios</h1>
      <UsersListFilters
        {...{
          search,
          activeOnly,
          sortBy,
        }}
        {...setFiltersFunctions}
      />
      {paintUsers(filteredUsers)}
    </div>
  );
};

const filterUsersByName = (users: User[], search: string) => {
  if (!search) return [...users];

  const lowerCasedSearch = search.toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(lowerCasedSearch)
  );
};

const filterActiveUsers = (users: User[], active: boolean) => {
  if (!active) return [...users];

  return users.filter(user => user.active);
};

const sortUsers = (users: User[], sortBy: number) => {
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

export default UsersList;
