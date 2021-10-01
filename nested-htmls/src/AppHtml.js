import React from 'react';

class AppHtml extends React.Component{
    componentDidMount(){
    //   const bundle = document.createElement('script');
    //   bundle.src = "Child.js";
    //   bundle.async = false;
    //   document.body.appendChild(bundle);

    //   bundle.onload = ()=>{
    //     window.childRender();
    //   }
        window.childRender();
    }
    
    render(){
        return(
        <div 
            title="AppHtml"
          >
          <title>Schedule Board ServiceCalendarIndex.tsx</title>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root-html" />
        </div>
    )};
}

export default AppHtml;