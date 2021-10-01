import React from 'react';
import PostList from './postList';
import SurpriseHover from './surpriseHover';

const App = ()=>{
    return (
        <div className= "ui container">
            <div id='abc123' />
            <SurpriseHover/>
            <PostList/>
        </div>
    );
}

export default App;