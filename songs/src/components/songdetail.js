import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong})=>{
    if(!selectedSong){
        return <div>Please select a song...</div>
    }
    return (
        <div className="item">
            <div className="content">
                <h2>Song Details...</h2>
                <h3>Title: {selectedSong.song.title}</h3>
                <h4>Duration: {selectedSong.song.duration}</h4>
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        selectedSong : state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);