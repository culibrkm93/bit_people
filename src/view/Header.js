import React from 'react';

const Header = (props) => {
    if (props.layout === 'list') {
        return (

            <header className="header">
                <h1>React Users</h1>
                <span className="buttons">
                    <button className="grid-button">
                        <i class="fas fa-th"></i>
                    </button>
                </span>
            </header>
        )
    } else {
        return <header className="header"><h1>React Users</h1><span className="buttons"><button className="grid-button"><i class="fas fa-redo-alt"></i></button><button className="list-button"><i class="fas fa-th-list"></i></button></span></header>
    }
};

export {
    Header
}




