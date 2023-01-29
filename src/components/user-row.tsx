import { User } from '../types/user.type';

import UserRole from './user-role';
import UserStatus from './user-status';

type UserRowProps = {
  user: User;
  toggleUserActive: (userId: number) => void;
};

const UserRow = ({ user, toggleUserActive }: UserRowProps) => {
  const { id, name, active, role } = user;

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
      <div className="c-user-row__action">
        <button onClick={() => toggleUserActive(id)}>
          {active ? 'Desactivar' : 'Activar'}
        </button>
      </div>
    </div>
  );
};

export default UserRow;
