import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos,selectedVideoCallback})=>{
    const videoItems = videos.map((video)=>{
        return <VideoItem 
            video={video} 
            selectedVideoCallback= {selectedVideoCallback}
            key = {video.id.videoId}
        />
    });
    console.log(videoItems);
    return (
        <div className="ui relaxed divided list">
            {videoItems}
        </div>
    );
}

export default VideoList;