import React from "react";
import 'semantic-ui-css/semantic.min.css'
import './SeasonDisplay.css';

const SeasonConfig = {
    summer : {
        text : "Let's hit the beach",
        iconName: 'sun'
    },
    winter:{
        text: 'Burr, its chilly',
        iconName: 'snowflake'
    }

}

const getSeason = (latitude,month)=>{
    if(month>2 || month<9){
        // latitude>0 means noethern hemisphere
        return latitude>0? 'summer':'winter';
    }else{
        return latitude>0? 'winter':'summer';
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];
    return (
        <div className = {`season-display ${season}`}>
            <i className={`icon-top-left massive ${iconName} loading icon`}/>
            <h1>{text}</h1>
            <i className={`icon-bottom-right massive ${iconName} loading icon`}/>
        </div>
    );
}

export default SeasonDisplay;