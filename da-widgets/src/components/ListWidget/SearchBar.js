import { useState, useEffect } from 'react';

const SearchBar = ({searchCallBack})=>{
    const defaultTerm = 'programming';
    const [term, setTerm] = useState(defaultTerm);
    const [debouncedTerm, setDebouncedTerm] = useState(defaultTerm);
    
    const onInputChange = (event)=>{
        setTerm(event.target.value);
    }

    console.log("rerendered searchbar...");

    // used to update debounced term after user finished typing
    useEffect( ()=>{
        const timeOutId = setTimeout(()=>{
            if(term){
                setDebouncedTerm(term);
            }
        },1000);
        console.log("setTimeout initiated... "+timeOutId);

        return ()=>{
            console.log("cleanup kills the old timeout... "+timeOutId);
            // this will cancel out any existing setTimeout initiated alrady and ensure only last one succeeds
            clearInterval(timeOutId);
        }
    },[term]);

    // used to make api call when debouncedTerm has changed
    useEffect(()=>{
        console.log("calling api debouncedTerm... "+debouncedTerm);
        searchCallBack(debouncedTerm);
    },[debouncedTerm]);

    return (
        <div className="ui form">
                <div className="field">
                    <label>
                        Enter your search term
                    </label>
                    <input
                        className = "input"
                        type="text" 
                        placeholder="search..."
                        onChange= {onInputChange}
                        value={term}
                    ></input>
                </div>
        </div>
    );
}

export default SearchBar;