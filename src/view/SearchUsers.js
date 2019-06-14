import React from 'react'

const SearchBar = (props) => {

    return (
        <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" value={this.state.value} placeholder="Search users" className="search" onChange={props.value} />
        </div >)
}

export {
    SearchBar
}