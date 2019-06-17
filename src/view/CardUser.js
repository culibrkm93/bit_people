import React from 'react';

const CardUser = (props) => {

    const user = props.user;
    const color = props.user.isFemale() ? 'red' : ''
    return (
        <section className={`single-card-user ${color}`} >
            <div className={`thumbnail`} ><img className="img" src={user.photo.large} alt="slicica" /></div>
            <p className="name">{user.formatFirstName()}</p>
            <p className="mail">{user.hideEmail()}</p>
            <p className="dob">Birth date: {user.formatDate()}</p>
        </section >
    )
};


export {
    CardUser
}