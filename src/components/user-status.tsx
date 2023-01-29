type UserStatusProps = {
  active: boolean;
};

const UserStatus = ({ active }: UserStatusProps) => {
  return <div>{active ? 'Activo' : 'Inactivo'}</div>;
};

export default UserStatus;
