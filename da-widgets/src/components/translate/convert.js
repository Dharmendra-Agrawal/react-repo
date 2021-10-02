import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language,text})=>{
    const [translatedText, setTranslatedText] = useState('');

    useEffect(()=>{
        const post = async ()=>{
            const response= await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q : text,
                target: language.value,
                key: GOOGLE_TRANSLATE_API_KEY
            }
            });
            setTranslatedText(response.data.data.translations[0].translatedText);
        }
        post();
    }, [language,text]);

    return (
        <div>
            {translatedText}
        </div>
    );
}

export default Convert;