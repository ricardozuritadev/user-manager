import { User } from '../types/user.type';

type UserListRowsProps = {
  users: User[];
};

const UserListRows = ({ users }: UserListRowsProps) => {
  if (users.length <= 0) return <p>No hay usuarios</p>;

  return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UserListRows;
