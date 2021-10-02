import axios from 'axios';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const List = (props)=>{
    const [searchResults, setSearchResults] = useState([]);

    const searchCallBack = async (term)=>{
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
            {
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch: term
                }
            }
        );
        setSearchResults(data.query.search);
    }


    return (
        <div>
            <SearchBar searchCallBack= {searchCallBack}/>
            <SearchResults items= {searchResults}/>
        </div>
        
    );
}

export default List;