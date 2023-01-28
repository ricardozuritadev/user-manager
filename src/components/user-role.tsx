import { Role } from '../types/user.type';

type UserRoleProps = {
  role: Role;
};

const UserRole = ({ role }: UserRoleProps) => {
  return <div>UserRole</div>;
};

export default UserRole;
