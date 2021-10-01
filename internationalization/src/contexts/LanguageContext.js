import React from 'react';

// setting default value as english
const Context =  React.createContext('english');

export class LanguageStore extends React.Component{
    state = {language : 'english'};

    setLanguage = (language)=>{
        this.setState({language:language})
    }

    render(){
        return (
            <Context.Provider value = {{...this.state, setLanguage:this.setLanguage}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;