import React, {useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = ()=>{
    const [videos, search]= useVideos('Business');
    const [selectedVideo, setSelectedVideo] = useState(null);

    // set the default video whenever new list of videos is fetched
    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);

    return (
        <div className="ui container">
            <SearchBar searchBarCallback = {search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="four wide column">
                        <VideoList 
                            videos ={videos}
                            // selectedVideoCallback = {(video)=>{setSelectedVideo(video);}}
                            selectedVideoCallback = {setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;