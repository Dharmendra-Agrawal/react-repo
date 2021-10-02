import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component{
    
    render(){
        const video = this.props.video;
        const snippet = video.snippet;
        return (
            <div 
                className="item video-item" 
                onClick={()=>this.props.selectedVideoCallback(video)}
                >
                <img 
                    className="ui image" 
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                />
                <div className="content">
                    <div className="header">{snippet.title}</div>
                    {/* <div className="description">{snippet.description}</div> */}
                </div>
            </div>
        );
    }
}

export default VideoItem;