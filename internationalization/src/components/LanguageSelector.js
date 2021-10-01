import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component{
static contextType = LanguageContext;

    iso31662Codes = [
        {flag:"france", language:"french"}, 
        {flag:"in", language:"hindi"}, 
        {flag:"us", language:"english"}
    ];

    renderFlags(){
        //console.log(this.context);
        return this.iso31662Codes.map(code =>{
            return <i 
                    className= {`flag ${code.flag}`}
                    onClick= {()=>{
                        //this.props.setLanguage(code.language);
                        this.context.setLanguage(code.language);
                    }}
                    key= {code.flag}
                />
        })
    }

    render(){
        return (
            <div>
                Select a Language
                {this.renderFlags()}
            </div>
        );
    }
}

export default LanguageSelector;