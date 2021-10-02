import { useEffect, useState } from "react";

const Route = ({pathname, children})=>{
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // this will be triggered only once to register the event handlers
    useEffect(
        ()=>
        {
            const onLocationChange = ()=>{
                // console.log("onLocationChange"+ window.location.pathname);
                setCurrentPath(window.location.pathname);
            }
           window.addEventListener('popstate', onLocationChange,{capture:true});
           
           return ()=>{
               window.removeEventListener('popstate', onLocationChange, {capture:true});
           }
        }
        ,[]
    );

    // all the four components will get event and only the one matching with the current url will be displayed
    return currentPath === pathname? children : null;
}

export default Route;