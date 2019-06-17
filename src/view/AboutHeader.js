import React from 'react';
import { withRouter, Link } from "react-router-dom";

const AboutHeader = (props) => {

    return (
        <header className="header">
            <h1 ><Link to="/" className="link-to">BIT People</Link></h1>
        </header>
    )
}

const RouterHeader = withRouter(AboutHeader)

export {
    RouterHeader as AboutHeader
}