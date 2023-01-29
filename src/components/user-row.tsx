import { User } from '../types/user.type';
import UserDiplay from './user-display';

import UserRole from './user-role';
import UserStatus from './user-status';

const UserRow = ({ username, name, active, role }: User) => {
  return (
    <div className="c-user-row">
      <div className="c-user-row__name">
        <UserDiplay name={name} username={username} />
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
