import { Role } from './types/user.type';

import UsersList from './components/users-list';

const USERS = [
  {
    username: 'pablo',
    name: 'Pablo Castellanos',
    active: true,
    role: Role.teacher,
  },
  {
    username: 'jose',
    name: 'Jose Fernándex',
    active: true,
    role: Role.teacher,
  },
  {
    username: 'javier',
    name: 'Javier López',
    active: false,
    role: Role.student,
  },
];

const App = () => {
  return (
    <div className="App">
      <UsersList users={USERS} />
    </div>
  );
};

export default App;
