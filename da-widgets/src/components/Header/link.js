import React from 'react';

const Link = ({className, href, children})=>{
    const onClickAnchor = (event)=>{
        // allow user to use Ctrl+Click to open in new tab
        if(event.metaKey || event.ctrlKey){
            return;
        }
        // this will stop the browser default beahviour to do full page reload
        event.preventDefault();
        // update the URL without page load/refresh
        window.history.pushState({},'',href);
        // emit Nagivation event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
            className = {className}
            href = {href}
            onClick = {onClickAnchor}
        >{children}
        </a>
    );
}

export default Link;