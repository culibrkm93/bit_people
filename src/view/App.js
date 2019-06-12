import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { listOfAllUsers } from '../shared/listOfAllUsers'
import { data } from '../service/UserService'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
        this.componentDidMount(
            data()
                .then(users => this.state = {
                    users: users
                })
        )
    }


    render() {

        return (
            <React.Fragment>
                <Header />
                <Main allUsers={listOfAllUsers[0].results} />
                <Footer />
            </React.Fragment >
        )
    }
};


export {
    App
}