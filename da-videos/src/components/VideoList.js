import React from 'react'
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    render(){
        const videoItems = this.props.videos.map((video)=>{
            return <VideoItem 
                video={video} 
                selectedVideoCallback= {this.props.selectedVideoCallback}
                key = {video.id.videoId}
            />
        });
        return (
            <div className="ui relaxed divided list">
                {videoItems}
            </div>
        );
    }
}

export default VideoList;