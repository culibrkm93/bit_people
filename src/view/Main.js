import React from 'react';
import { UserList } from './UserList'
import { SearchBar } from './SearchUsers';

const Main = (props) => {
    return (
        <main>
            <SearchBar onInputChange={props.onInputChange} value={props.value} />
            <UserList layout={props.layout} users={props.allUsers} />
        </main>
    )
};

export {
    Main
}