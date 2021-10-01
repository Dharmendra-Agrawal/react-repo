import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongsList extends Component{
    // state = {isSelectedDisabled : false};
    renderedList = ()=>{
        return this.props.songs.map( (song, index)=>{
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button 
                            // disabled = {this.state.isSelectedDisabled}
                            className="ui button primary"
                            // callig selectSong from the state automatically call dispatch
                            onClick= {()=>{
                                this.props.selectSong(song);
                                // this.setState({isSelectedDisabled:true});
                            }}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>    
            );
            }
        );
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Select the song you like....</h3>
                <div className="ui celled list">
                    {this.renderedList()}
                </div>
            </div>
        )
    };
}

// this will take state from redux store and convert them to props
const mapStateToProps = (state)=>{
    // console.log(state);
    return {songs : state.songs};
}

// connect will connect songlist to provider for fetching the state
export default connect(
    mapStateToProps,
    {selectSong}
)(SongsList);