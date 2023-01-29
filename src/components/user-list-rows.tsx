import { User } from '../types/user.type';

import UserRow from '../components/user-row';

type UserListRowsProps = {
  users: User[];
  toggleUserActive: (userId: number) => void;
};

const UserListRows = ({ users, toggleUserActive }: UserListRowsProps) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return (
    <>
      {users.map(user => (
        <UserRow key={user.username} {...{ user, toggleUserActive }} />
      ))}
    </>
  );
};

export default UserListRows;
