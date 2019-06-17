import React from 'react';
import { withRouter, Link } from "react-router-dom";

const Header = (props) => {

    const pathname = props.location.pathname

    const icon = props.layout === 'list' ? 'fas fa-th' : 'fas fa-th-list'
    const aboutPage = <span className="nothing"></span>;
    const mainPage = <><span className="buttons">
        <h3 ><Link to="/about" className="link-to">About</Link></h3>
        <button className="refresh-button" onClick={props.refreshPage}>
            <i className="fas fa-redo-alt"></i>
        </button>
        <button className="grid-button" onClick={props.onLayoutChangeClick}>
            <i className={icon}></i>
        </button>
    </span></>;


    const isAboutPage = pathname === '/about'

    return (
        <header className="header">
            <h1 ><Link to="/" className="link-to">BIT People</Link></h1>
            {isAboutPage ? aboutPage : mainPage}
        </header>
    )
}

const RouterHeader = withRouter(Header)

export {
    RouterHeader as Header
}
