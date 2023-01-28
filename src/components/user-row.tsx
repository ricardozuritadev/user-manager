import { Role, User } from '../types/user.type';

const UserRow = ({ username, name, active, role }: User) => {
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
      <button onClick={() => {}}>{active ? 'Desactivar' : 'Activar'}</button>
    </div>
  </div>;
};

export default UserRow;
