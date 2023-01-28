import {
  filterActiveUsers,
  filterUsersByName,
  paintUsers,
  sortUsers,
} from '../utils/functions';
import { useFilters } from '../hooks/useFilters';

import { User } from '../types/user.type';

import UsersListFilters from './users-list-filters';

type UsersListProps = {
  initialUsers: User[];
};

const UsersList = ({ initialUsers }: UsersListProps) => {
  const { search, activeOnly, sortBy, ...setFiltersFunctions } = useFilters();

  let filteredUsers = filterActiveUsers(initialUsers, activeOnly);
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

export default UsersList;
