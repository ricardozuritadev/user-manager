type UserDiplayProps = {
  name: string;
  username: string;
};

const UserDiplay = ({ name, username }: UserDiplayProps) => (
  <div className="c-user-display">
    <span className="c-user-display__name">{name}</span>
    <span className="c-user-display__username">@{username}</span>
  </div>
);

export default UserDiplay;
