import React from "react";
import ReactDOM from "react-dom";

const Child = ()=>{
    return (
        <div>
            <h3>This is children element</h3>
        </div>
    );
}

export default Child;

export const childRender = ()=>{
    ReactDOM.render(<Child />, document.querySelector('#root-html'))
}

window.childRender = childRender;