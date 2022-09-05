import React from "react";


const SearchBar = ({searchfield,searchChange}) => {
    return(
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-light-green"
            type='search'
            placeholder='Search your kitty'
            onChange={searchChange}
            ></input>
        </div>
    );
}

export default SearchBar;