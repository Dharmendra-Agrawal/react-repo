import React, { useState } from 'react';

const SearchBar = ({searchBarCallback})=>{

    const[searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = (event)=>{
        event.preventDefault();
        // invoke parent callback
        searchBarCallback(searchTerm);
    }

    const onInputhange  = (event)=>{
        setSearchTerm(event.target.value);
    }

    return(
        <div className = "search-bar ui segment">
            <form onSubmit = {onFormSubmit} className = "ui form">
                <label>Search Video</label>
                <input 
                    type = "text"
                    value = {searchTerm} 
                    onChange = {onInputhange}
                ></input>
            </form>
        </div>
    );
}

export default SearchBar;