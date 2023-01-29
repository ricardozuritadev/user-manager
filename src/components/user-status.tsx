import CheckCircleIcon from './icons/check-circle-icon';
import CrossCircleIcon from './icons/cross-circle-icon';

type UserStatusProps = {
  active: boolean;
};

const UserStatus = ({ active }: UserStatusProps) => {
  // const activeClassname =
  const Icon = active ? CheckCircleIcon : CrossCircleIcon;

  return (
    <div className={`c-user-status c-user-status--${active}`}>
      <Icon className="c-user-status__icon" />
      <span className="c-user-status__text">
        {active ? 'Activo' : 'Inactivo'}
      </span>
    </div>
  );
};

export default UserStatus;
