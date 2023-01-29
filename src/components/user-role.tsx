import { Role } from '../types/user.type';

type UserRoleProps = {
  role: Role;
};

const UserRole = ({ role }: UserRoleProps) => {
  return <div className="c-user-role">{role}</div>;
};

export default UserRole;
