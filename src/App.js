import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';


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

  // Deleted user
  const deleteUser = (id) => {
    // console.log(id)
    setUsers(users.filter(user => user.id !== id))
  }


  // Edit user
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  // Update user
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(item => item.id === id ? updateUser : item))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              
              </div>
            ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )
          }


        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}  
          />
        </div>
      </div>
    </div>
  );
}

export default App;
