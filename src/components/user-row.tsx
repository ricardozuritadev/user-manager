import { Role, User } from '../types/user.type';

const UserRow = ({ username, name, active, role }: User) => {
  return (
    <div>
      <p>{username}</p>
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default UserRow;
