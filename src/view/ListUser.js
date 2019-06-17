import React from 'react'

const ListUser = (props) => {
    const user = props.user;
    const color = props.user.isFemale() ? 'red' : ''
    return (
        <section className={`single-list-user ${color}`}>
            <div className="thumb-img"><img className="round-img" src={user.photo.thumbnail} alt="slicica" /></div>
            <p className="list-name">{user.formatFirstName()} {user.formatLastName()}</p>
            <p><i className="fas fa-envelope"></i>email:{user.hideEmail()}</p>
            <p className="dob"><i className="fas fa-birthday-cake"></i> {user.formatDate()}</p>
        </section>
    )
};

export {
    ListUser
}