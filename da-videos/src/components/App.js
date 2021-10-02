import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
        videos:[], 
        selectedVideo:null
    };

    componentDidMount(){
        // make default call with some term
        this.searchBarCallback('latest');
    }

    searchBarCallback = async (searchTerm)=>
    {
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });
        this.setState(
            {
                videos: response.data.items, 
                selectedVideo:response.data.items[0]
            }
        );
    }

    selectedVideoCallback = (selectedVideo)=>{
        console.log(selectedVideo);
        this.setState({selectedVideo:selectedVideo});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar searchBarCallback = {this.searchBarCallback}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="four wide column">
                            <VideoList 
                                videos ={this.state.videos}
                                selectedVideoCallback = {this.selectedVideoCallback}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;