import React from 'react';
import { SingleUser } from './SingleUser'

const UserList = (props) => {
    return (<div className="whole-list group">
        {props.users.map((user, i) => <SingleUser user={user} key={i} />)}
    </div>)
};

export {
    UserList
}