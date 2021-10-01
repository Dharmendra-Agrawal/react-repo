import React, { useState } from "react";
import ReactDOM from "react-dom";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover Me
        </div>
    </div>
  );
};

const HoverText = () => {
  return (
    <div style= {{color:'red', backgroundColor:'green', height:'100%', width:'100%'}}>
      Hovering right meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
      {React.createElement('h1',null,'i am h1')}
    </div>
  );
};

const SurpriseHover = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <div>
      {/* Hover over this div to hide/show <HoverText /> */}
      <HoverableDiv
        handleMouseOver={()=>{
            setIsHovering(true);
            document.querySelector('#abc123') && ReactDOM.render(<HoverText id='mouseon'/>, document.querySelector('#abc123'))}
        }
        handleMouseOut={ ()=>{
            setIsHovering(false);
            document.querySelector('#abc123') && ReactDOM.render(<div id='mouseout' />, document.querySelector('#abc123'))}
        }
      />
    </div>
  );
};

export default SurpriseHover;