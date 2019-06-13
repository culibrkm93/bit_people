import React from 'react';
import { UserList } from './UserList'

const Main = (props) => {
    return (
        <main>
            <UserList layout={props.layout} users={props.allUsers} />
        </main>
    )
};

export {
    Main
}