import React from 'react';

class SearchBar extends React.Component{
    state = {searchTerm:''};

    onFormSubmit = (event)=>{
        event.preventDefault();
        // invoke parent callback
        this.props.searchBarCallback(this.state.searchTerm);
    }

    onInputhange  = (event)=>{
        this.setState({searchTerm: event.target.value})
    }

    render(){
        return(
            <div className = "search-bar ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <label>Search Video</label>
                    <input 
                        type = "text"
                        value = {this.state.searchTerm} 
                        onChange = {this.onInputhange}
                    ></input>
                </form>
            </div>
        );
    }
}

export default SearchBar;