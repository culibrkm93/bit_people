import React from 'react';
import { data } from '../../service/UserService'
import { Main } from '../Main';
import { Header } from '../HomepageHeader';
import { LoadingAnimation } from '../LoadingAnimation'

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        const savedLayout = localStorage.getItem(`layout`);
        const layout = savedLayout ? savedLayout : 'list';

        const savedUsers = localStorage.getItem(`users`);
        const users = savedUsers ? savedUsers : [];

        this.state = {
            users: [],
            layout,
            inputValue: '',
            about: false,
            time: new Date().getTime()
        }
    }

    loadData() {
        data()
            .then(users => this.setState({
                users: users
            }));

    }

    // loadedUsers() {
    //     if (this.state.users > 0) {
    //         return localStorage.setItem(users, users)
    //     }
    // }


    componentDidMount() {
        this.loadData();
        const users = this.state.users;
        localStorage.setItem('users', users)
    }

    onLayoutChangeClick = () => {

        const layout = this.state.layout === 'list' ? 'grid' : 'list'
        this.setState({ layout })
        localStorage.setItem('layout', layout)
    }

    refreshPage = () => {
        this.setState({ users: [] });
        this.loadData();
    }


    onInputChange = (e) => {
        this.setState({ inputValue: e.target.value });

    }

    timeUpdate = () => {
        const newTime = new Date().getTime();
        const updatedTime = newTime - this.state.time;
        this.setState({ time: new Date.getTime() });

        return updatedTime;

    }



    render() {
        const { users, inputValue } = this.state;

        const usersFilteredFirstName = users.filter(user => (
            user.name.first.toLowerCase().includes(inputValue.toLowerCase())
        ));
        const usersFilteredLastName = users.filter(user => (
            user.name.last.toLowerCase().includes(inputValue.toLowerCase())
        ));

        const hasUsers = this.state.users.length > 0
        const allUsers = [...usersFilteredFirstName, ...usersFilteredLastName];

        return (
            <>
                <Header
                    layout={this.state.layout}
                    onLayoutChangeClick={this.onLayoutChangeClick}
                    refreshPage={this.refreshPage}
                />

                {
                    !hasUsers
                        ? <LoadingAnimation />
                        : (
                            <Main
                                allUsers={allUsers}
                                layout={this.state.layout}
                                onInputChange={this.onInputChange}
                                value={this.state.inputValue} />
                        )
                }
            </>
        );

    }
}

export {
    Homepage
}