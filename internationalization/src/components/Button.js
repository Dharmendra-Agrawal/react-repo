import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// fetching the context.consumer
class Button extends React.Component{
    renderButton(color){
        return (
            <button 
                className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(value)=> value.language === 'english'? 'Submit': 'Other Language'}
                    </LanguageContext.Consumer>
            </button>
        );
    }

    render(){
        return (
            <ColorContext.Consumer>
                {(value)=>this.renderButton(value)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;