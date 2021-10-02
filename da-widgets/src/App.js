import React, { useState } from "react";
import Accordian from './components/AccordionWidget/Accordian'
import List from "./components/ListWidget/List";
import DropDown from "./components/dropdown/dropdown";
import Translate from "./components/translate/translate";
import Route from "./components/route";
import Header from "./components/Header/header";

const options = [
    {label:'color red', value:'red'},
    {label:'color green', value:'green'},
    {label:'color blue', value:'blue'}
];

const items = [
    {title:'What is React?', content:'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'},
    {title:'What is react latest version', content:'React latest vrsion is 17.0.2'},
    {title:'How many companies use react?', content:'9845 companies reportedly use React in their tech stacks, including Uber, Airbnb, and Facebook.'}
];


const App = ()=>{
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdwon]= useState(true);

    // const renderComponent = ()=>{
    //     let component;
    //     switch(window.location.pathname){
    //         case '/list':
    //             component = <List />
    //             break;
    //         case '/dropdown':
    //             component =   (
    //                 <div>
    //                     <DropDown 
    //                     options = {options} 
    //                     selected = {selected}
    //                     onSelectedChange= {setSelected}
    //                     label = 'Choose color'
    //                     />
    //                 <div style={{color:selected.value}}>{selected.value}</div>
    //                 </div>);
    //                 break;  
    //         case '/translate':
    //                 component = <Translate />;
    //                 break;
    //         default:
    //             if(window.location.pathname !='/')
    //                 window.location.pathname = '/';
    //             component = <Accordian items = {items} />
    //     }
    //     return component;
    // }

    return (
        <div>
            <Header/>
            <Route pathname='/'>
                <Accordian items = {items} />
            </Route>
            <Route pathname='/list'>
                <List />
            </Route>
            <Route pathname='/dropdown'>
                <div>
                    <DropDown 
                        options = {options} 
                        selected = {selected}
                        onSelectedChange= {setSelected}
                        label = 'Choose color'
                        />
                     <div style={{color:selected.value}}>{selected.value}</div>
                </div>
            </Route>
            <Route pathname='/translate'>
                <Translate />
            </Route>
        </div>
    );
}

export default App;