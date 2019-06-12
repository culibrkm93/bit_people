import React from 'react';

const SingleUser = (props) => {
    const user = props.user;
    return (
        <section className="single-user">
            <div className="thumbnail"><img className="img" src={user.picture.large} alt="slicica" /></div>
            <p className="name">Name: {user.name.first}</p>
            <p>Email: {user.email}</p>
            <p className="dob">Date of birth: {(new Date(user.dob.date).getMonth() + 1) + "-" + new Date(user.dob.date).getDate() + "-" + new Date(user.dob.date).getFullYear()}</p>
        </section>
    )
};

export {
    SingleUser
}