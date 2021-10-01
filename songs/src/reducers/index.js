import { combineReducers } from "redux";

// songs reducer contains static data only
const songsReducer = ()=>{
    return [
        {
            title : 'Main Hoon Na',
            duration : '4.50'
        },
        {
            title : 'Real Slim Shady',
            duration : '4.10'
        },
        {
            title : 'Dil to pagal hai',
            duration : '4.18'
        }
    ];
}

// reducer first param state and second is action
const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});