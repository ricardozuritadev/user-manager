import { User } from '../types/user.type';

import UserRow from '../components/user-row';

type UserListRowsProps = {
  users: User[];
};

const UserListRows = ({ users }: UserListRowsProps) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return (
    <div className="c-user-list-rows">
      {users.map(user => (
        <UserRow key={user.username} {...user} />
      ))}
    </div>
  );
};

export default UserListRows;
