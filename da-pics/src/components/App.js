import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images:[]};

    searchBarCallback = async (searchTerm)=>{
        console.log("searchBarCallback : "+searchTerm);
        var response = await unsplash.get('/search/photos',
            {
                params: {query: searchTerm}
            }
        );
        console.log(this);
        this.setState({images:response.data.results});
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                {/* <SearchBar searchCallBack = {(t)=> this.searchBarCallback(t)}/> */}
                <SearchBar searchCallBack = {this.searchBarCallback}/>
                <ImageList images= {this.state.images}/>
            </div>
        );
    }
}

export default App;