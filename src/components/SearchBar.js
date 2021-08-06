import React from 'react';

class SearchBar extends React.Component{
    //controlled handler approach by using state object
    state = {term:''};

    // constructor(){
    //     super();
    //     // bind will add function to current execution context and so this will be made available
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    //alternatively you can use short arrow function, which automatically binds to execution context
    onFormSubmit = (event)=>{
        event.preventDefault();
        //making a call back to the parent app
        this.props.searchCallBack(this.state.term);
    }

    //uncontrolled handler
    onInputChange(event){
        console.log(event.target.value);
        console.log(this);
    }

    // onInputClick(event){
    //     console.log(event.target);
    // }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Images...</label>
                        {/* <input type="text" onClick={this.onInputClick}></input> */}
                        {/* <input type="text" onChange={this.onInputChange}></input> */}
                        {/* <input type="text" onChange={(event)=>{console.log(event.target.value)}}></input> */}
                        <input type="text" value={this.state.term} onChange ={(e)=>this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;