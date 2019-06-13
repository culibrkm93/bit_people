import React from 'react';
import { CardUser } from './CardUser'
import { ListUser } from './ListUser'

const UserList = (props) => {
    if (props.layout === "list") {
        return (<div className="whole-list group">
            {props.users.map((user, i) => <ListUser user={user} key={i} />)}
        </div>)
    } else {
        return (<div className="whole-list group">
            {props.users.map((user, i) => <CardUser user={user} key={i} />)}
        </div>)
    }
};

export {
    UserList
}