import React from 'react';

class VideoDetail extends React.Component{
    render(){
        let video = this.props.selectedVideo;
        if(!video){
            return <div />
        }
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title = "video player" src={videoUrl}/>
                </div>
                <div className="ui segment">
                   <h4> {video.snippet.title} </h4>
                   <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;