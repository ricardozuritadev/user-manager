import UsersList from './components/users-list';

import { USERS } from './data/users-mock';

const App = () => {
  return (
    <div className="App">
      <UsersList initialUsers={USERS} />
    </div>
  );
};

export default App;
