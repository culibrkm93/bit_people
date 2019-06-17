import React from 'react';
import { CardUser } from './CardUser'
import { ListUser } from './ListUser'

const UserList = (props) => {
    console.log(props);
    if (props.users.length === 0) {
        return (
            <div className="whole-list group">
                <section className="no-users">
                    <h1>
                        <i className="far fa-meh"></i>
                    </h1>
                    <p>
                        We couldn't find any people matching your search
                    </p>
                </section>
            </div>)

    } else {
        if (props.layout === "list") {
            return (<div className="whole-list group">
                {props.users.map((user, i) => <ListUser user={user} key={i} />)}
            </div>)
        } else {
            return (<div className="whole-list group">
                {props.users.map((user, i) => <CardUser user={user} key={i} />)}
            </div>)
        }

    }
};

export {
    UserList
}