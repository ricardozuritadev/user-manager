import { Role } from '../types/user.type';

type UserRoleProps = {
  role: Role;
};

const UserRole = ({ role }: UserRoleProps) => {
  return <div>{role}</div>;
};

export default UserRole;
