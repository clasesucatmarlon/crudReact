import React, { useState } from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';


function App() {

  // Data users
  const userData = [
    { id: uuidv4(), name: 'Marlon García', username: 'clasesucatmarlon' },
    { id: uuidv4(), name: 'Ana Pérez', username: 'anaperez' },
    { id: uuidv4(), name: 'Luis Cárdenas', username: 'luiscardenas' },
    { id: uuidv4(), name: 'Carlos Herrera', username: 'carlosherrera' },
  ]


  // State
  const [users, setUsers] = useState(userData);


  // Add user
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
