import React from 'react';

const SearchResults = (props)=>{
    const renderedItems = props.items.map(({title,snippet,pageid})=>{
        return (
            <div className="item" key={pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href = {`https://en.wikipedia.org?curid${pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{__html:snippet}} />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="ui celled list">
            {renderedItems}
        </div>
    );
}

export default SearchResults;