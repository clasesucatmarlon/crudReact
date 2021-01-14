import React from 'react';

const UserTable = (props) => {
    /* console.log(props.users); */
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
                    props.users.length > 0 ? (
                        props.users.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button
                                        className="button muted-button"
                                        onClick={
                                            () => {props.editRow(item)}
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="button muted-button"
                                        onClick={() => { props.deleteUser(item.id) }}
                                    >
                                        Delete
                                    </button>
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
