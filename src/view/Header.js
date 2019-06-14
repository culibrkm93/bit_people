import React from 'react';

const Header = (props) => {

    const icon = props.layout === 'list' ? 'fas fa-th' : 'fas fa-th-list'
    return (
        <header className="header">
            <h1>React Users</h1>
            <span className="buttons">
                <button className="refresh-button" onClick={props.refreshPage}>
                    <i className="fas fa-redo-alt"></i>
                </button>
                <button className="grid-button" onClick={props.onLayoutChangeClick}>
                    <i className={icon}></i>
                </button>
            </span>
        </header>
    )
}

export {
    Header
}




