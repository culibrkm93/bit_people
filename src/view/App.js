import React from 'react';
import { Footer } from './Footer'
import { Route, Switch } from "react-router-dom";
import { About } from './pages/About';
import { Homepage } from './pages/Homepage'

class App extends React.Component {
    render() {

        return (
            <React.Fragment>
                <Switch >
                    <Route path="/about" component={About} />
                    <Route path='/' component={Homepage} />
                </Switch>
                < Footer />
            </React.Fragment>
        )

    }
};

export {
    App
}