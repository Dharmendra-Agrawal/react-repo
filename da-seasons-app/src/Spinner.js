import React from 'react';
import 'semantic-ui-css/semantic.min.css'

const Spinner = (props)=>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                    {props.loadingText}
            </div>
        </div>
    );
}

// define default props value
Spinner.defaultProps = {
    loadingText : 'Loading...'
}

export default Spinner;