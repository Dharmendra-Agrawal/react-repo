import React, { useEffect, useState } from 'react';
import DropDown from '../dropdown/dropdown';
import Convert from './convert';

const options = [
    {label:'Hindi', value:'hi'},
    {label:'French', value:'fr'},
    {label:'Spanish', value:'es'},
    {label:'Arabic', value:'ar'}
]

const Translate = ()=>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebouncedText(text);
        }, 1000);

        return ()=>{
            clearTimeout(timeoutId);
        };
    },[text]);

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter your text</label>
                    <input 
                        onChange= {
                            (e)=>{setText(e.target.value)}
                        }
                        value = {text}
                    />
                </div>
            </div>
            <DropDown 
                options={options} 
                selected={language} 
                onSelectedChange ={setLanguage}
                label= 'Choose Language to Translate'
            />
            <hr></hr>
            <h3 className="ui header">Output</h3>
            <Convert language={language} text = {debouncedText}/>
        </div>
    );
}

export default Translate;