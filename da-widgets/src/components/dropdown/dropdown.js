import React, { useEffect, useRef, useState } from 'react';

const DropDown = ({options, selected, onSelectedChange, label})=>{
    const [isOpen, setIsOpen] = useState(false);

    const formRef = useRef(); 

    // only executes it once to register the handler
    useEffect(()=>{
        // body event listener should only be executed when clicked outside of the dropdwon elements
        const bodyEventListener = (event)=>{
            if(!formRef.current.contains(event.target))
                setIsOpen(false);
            // console.log("body is clicked"+isOpen);
        }
        
        document.body.addEventListener('click',bodyEventListener,{capture:true});
        
        // cleanup code, to remove event listener so that they are not called when Dropdown DOM is not loaded
        return ()=>{
            document.body.removeEventListener('click', bodyEventListener, {capture:true});
        }
    },[]);

    const onDropdownClick = ()=>{
        setIsOpen(!isOpen);
        // console.log("dropdown clicked"+isOpen);
    }

    const renderedOptions = options.map((option)=>{
        if(selected === option){
            return null;
        }
        return (
            <div 
                key= {option.value} 
                className="item"
                // option is easily available at this point, on click handler can also be 
                // written at parent dropdown div
                onClick = {()=>{
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    // console.log(formRef);

    return (
        <div className="ui form" ref={formRef}>
            <div className="field">
                <label className="label">{label}</label>
                    <div 
                        className={`ui selection dropdown ${isOpen?'visible active':''}`}
                        onClick= {onDropdownClick}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${isOpen?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;