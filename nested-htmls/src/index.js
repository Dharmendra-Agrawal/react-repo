import React from 'react';
import ReactDOM from 'react-dom';
import {childRender} from './Child'
import AppHtml from './AppHtml';

const CustomControl= ()=>{
    return (
        <div>
            <AppHtml/>
            <iframe src="child.html" hidden="true"/>
        </div>
      );
}
ReactDOM.render(<CustomControl />, document.querySelector('#container'));

