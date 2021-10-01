import React from 'react';
import SongDetail from './songdetail';
import SongsList from './songslist';

const App = ()=>{
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongsList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;