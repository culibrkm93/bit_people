import React from 'react'

const SearchBar = (props) => {

    return (
        <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" value={props.value} placeholder="Search users" className="search" onChange={props.onInputChange} />
        </div >)
}

export {
    SearchBar
}