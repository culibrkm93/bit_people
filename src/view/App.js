import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { data } from '../service/UserService'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            layout: "list"
        }
    }

    componentDidMount() {
        data()
            .then(users => this.setState({
                users: users
            }))

    }


    render() {

        return (
            <React.Fragment>
                <Header layout={this.state.layout} />
                {/* <div className="dugmici">
                    <button className="elButton cards">Cards</button>
                    <button className="elButton list">List</button>
                </div> */}
                <Main allUsers={this.state.users} layout={this.state.layout} />
                <Footer />
            </React.Fragment >
        )
    }
};


export {
    App
}