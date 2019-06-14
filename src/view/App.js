import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { data } from '../service/UserService'
import { SearchBar } from './SearchUsers'


class App extends React.Component {
    constructor(props) {
        super(props);

        // const savedLayout = localStorage.getItem(`layout`)
        // const layout = savedLayout || 'list' ---> drugi nacin zapisivanja

        const savedLayout = localStorage.getItem(`layout`);
        const layout = savedLayout ? savedLayout : 'list'

        this.state = {
            users: [],
            layout,
            female: true,
            value: ''
        }

    }

    loadData() {
        data()
            .then(users => this.setState({
                users: users
            }))
    }

    componentDidMount() {
        this.loadData()

    }

    onLayoutChangeClick = () => {

        const layout = this.state.layout === 'list' ? 'grid' : 'list'
        this.setState({ layout })
        localStorage.setItem('layout', layout)
    }

    refreshPage = () => {
        this.loadData()
    }

    onKeyPress = (event) => {
        const input = event.target.value;
        this.setState({ value: input })
        const search = this.state.value
        this.state.users.filter((user) => {
            if (search.includes(`${user.name.first}`) || search.includes(`${user.name.last}`)) {

            }

        })
    }

    render() {
        return (

            < React.Fragment >
                <Header layout={this.state.layout} onLayoutChangeClick={this.onLayoutChangeClick} refreshPage={this.refreshPage} />
                <SearchBar value={this.onKeyPress} />
                <Main allUsers={this.state.users} layout={this.state.layout} />
                <Footer />
            </React.Fragment >
        )
    }
};


export {
    App
}