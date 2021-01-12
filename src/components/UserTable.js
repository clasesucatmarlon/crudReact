import React from 'react';

const UserTable = ({ users }) => {
    console.log(users);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ? (
                        users.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button className="button muted-button">Edit</button>
                                    <button className="button muted-button">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                }

            </tbody>
        </table>
    );
}

export default UserTable;
