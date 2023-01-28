import { useState } from 'react';

import { User } from '../types/user.type';

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
  const renderedUsers = renderUsers(filteredUsers);

  return (
    <div className="c-user-list">
      <h1 className="c-user-list__title">Listado de usuarios</h1>
      <form className="c-user-list__form">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="c-user-list__checkbox">
          <input
            type="checkbox"
            checked={activeOnly}
            onChange={e => setActiveOnly(e.target.checked)}
          />
          <span>Sólo activos</span>
        </div>
        <select
          className="c-user-list__select"
          value={sortBy}
          onChange={e => setSortBy(Number(e.target.value))}
        >
          <option value={0}>Por defecto</option>
          <option value={1}>Por nombre</option>
        </select>
      </form>
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

const renderUsers = (users: User[]) => {
  if (!users.length) return <p>No hay usuarios</p>;
  return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UsersList;
