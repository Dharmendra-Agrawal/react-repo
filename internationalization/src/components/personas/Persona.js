import React from 'react';
import { Person, PersonCard } from '@microsoft/mgt-react';
import ReactDOM  from 'react-dom';

const personDetails= {
    displayName: "Dharmendra",
    companyName: "Microsoft",
    jobTitle: "Senior Software Engineer",
    country: "India",
    mail:"dharmendra.agrawal@microsoft.com"
}

class Persona extends React.Component{
    divRef = React.createRef();

    render(){
        return (
            <div>
                <Person 
                    onMouseOver = {()=>{ReactDOM.render(<PersonaCard />, this.divRef.current)}}
                    //onMouseLeave = {()=>{ReactDOM.render(<div/>, this.divRef.current)}}
                    personDetails={personDetails}
                 />
                 <div ref= {this.divRef}/>
            </div>
        );
    }
}

const PersonaCard = ()=>{
    return (
        <PersonCard 
            personDetails={personDetails}
            showPresence ={true}
            personQuery = "show-name show-email"
            isExpanded = {false}
        >
        </PersonCard>
    );
}

export default Persona;