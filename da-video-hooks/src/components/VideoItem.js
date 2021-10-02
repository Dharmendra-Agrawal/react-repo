import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, selectedVideoCallback})=>{  
    const snippet = video.snippet; 
    return (
            <div 
                className="item video-item" 
                onClick={()=>selectedVideoCallback(video)}
                >
                <img 
                    className="ui image" 
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                />
                <div className="content">
                    <div className="header">{snippet.title}</div>
                </div>
            </div>
    );
}

export default VideoItem;