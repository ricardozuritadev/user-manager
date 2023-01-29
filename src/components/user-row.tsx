import { User } from '../types/user.type';

import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ username, name, active, role }: User) => {
  return (
    <div className="c-user-row">
      <div className="c-user-row__name">
        <span>{name}</span>
      </div>
      <div className="c-user-row__status">
        <UserStatus active={active} />
      </div>
      <div className="c-user-row__role">
        <UserRole role={role} />
      </div>
      <div className="c-user-row__action"></div>
    </div>
  );
};

export default UserRow;
