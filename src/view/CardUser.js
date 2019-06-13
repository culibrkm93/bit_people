import React from 'react';

const CardUser = (props) => {
    const user = props.user;
    return (
        <section className="single-card-user">
            <div className="thumbnail"><img className="img" src={user.photo.large} alt="slicica" /></div>
            <p className="name">{user.name.first}</p>
            <p className="mail">{user.hideEmail()}</p>
            <p className="dob">Birth date: {user.formatDate()}</p>
        </section>
    )
};


export {
    CardUser
}