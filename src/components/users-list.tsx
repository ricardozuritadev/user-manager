import { useState } from 'react';

import { User } from '../types/user.type';

import UserListRows from './user-list-rows';
import UsersListFilters from './users-list-filters';

type UserListProps = {
  initialUsers: User[];
};

const UsersList = ({ initialUsers }: UserListProps) => {
  const [search, setSearch] = useState('');
  const [activeOnly, setActiveOnly] = useState(false);
  const [sortBy, setSortBy] = useState(0);

  let filteredUsers = filterActiveUsers(initialUsers, activeOnly);
  filteredUsers = filterUsersByName(filteredUsers, search);
  filteredUsers = sortUsers(filteredUsers, sortBy);

  return (
    <div className="c-user-list">
      <h1 className="c-user-list__title">Listado de usuarios</h1>
      <UsersListFilters
        {...{
          search,
          setSearch,
          activeOnly,
          setActiveOnly,
          sortBy,
          setSortBy,
        }}
      />
      <UserListRows users={filteredUsers} />
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
