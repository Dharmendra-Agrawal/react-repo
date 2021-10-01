import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import SparkLineChart from './charts/SparkLineChart';
import GoogleMaps from './maps/GoogleMaps';
import Persona from './personas/Persona';

class App extends React.Component{
    render(){
        return (
            <div className="ui container">
                {/* <LanguageStore>
                    <LanguageSelector/>
                    <ColorContext.Provider value="red">
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
                <SparkLineChart/> */}
                {/* <GoogleMaps lat={12.9762} lng={77.6033}/> */}
                <div id="persona-lpc"/>
                <Persona/>
            </div>
        );
    }
}

export default App;