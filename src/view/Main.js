import React from 'react';
import { UserList } from './UserList'

const Main = (props) => {
    return (
        <main>
            <UserList users={props.allUsers} />
        </main>
    )
};

export {
    Main
}