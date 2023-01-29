import { useFilters } from '../hooks/use-filters';
import { useUsers } from '../hooks/use-users';

import {
  filterActiveUsers,
  filterUsersByName,
  sortUsers,
} from '../utils/functions';

import { User } from '../types/user.type';

import UsersListFilters from './users-list-filters';
import UserListRows from './user-list-rows';

type UsersListProps = {
  initialUsers: User[];
};

const UsersList = ({ initialUsers }: UsersListProps) => {
  const { search, activeOnly, sortBy, ...setFiltersFunctions } = useFilters();

  const { users, toggleUserActive } = useUsers(initialUsers);

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
      <UserListRows users={filteredUsers} toggleUserActive={toggleUserActive} />
    </div>
  );
};

export default UsersList;
