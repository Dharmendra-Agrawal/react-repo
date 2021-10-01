import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// fetching using this.context
class Field extends React.Component{
    static contextType = LanguageContext;
    render(){
        //console.log(this.context);
        const text = this.context.language === 'english'? 'Name': 'Other Language Name';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field;