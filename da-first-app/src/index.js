// import the React and ReactDOM library
import React from "react";
import ReactDOM from "react-dom";



// create React component
// create function based component
const App1 = function(){
    const buttonText = {text : 'Click Me!'};
    return ( 
    <div>
        <label className="label" htmlFor="name">Enter your name : </label>
        <input id="name" type="text"/>
        {/* <button style="background-color : blue; color: white">Submit</button>  */}
        <button style={{backgroundColor : 'blue',color: 'white'}}>{buttonText.text}</button> 
    </div>
    )
}

// alternatively using arrow
const App2 = ()=>{
    return <div>
        <ul>
            <li>How are you?</li>
            <li>good day</li>
            <li>bye</li>
        </ul>
    </div>
}

// take the react component and show it on the screen
ReactDOM.render(
    <App1/>,
    document.querySelector('#appRoot1')
);

ReactDOM.render(
    <App2/>,
    document.querySelector('#appRoot2')
);