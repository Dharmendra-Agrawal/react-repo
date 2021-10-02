import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{
    // optional method
    // constructor(props){
    //     super(props);

    //     //only time direct assignment to state is done else use setState
    //     this.state = {latitude:null, errorMessage:''};
    // }
    state = {latitude:null, errorMessage:''};

    componentDidMount(){
        console.log("componentDidMount: get the current location");
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({latitude : position.coords.latitude});
            },
            (failure)=> {
                this.setState({errorMessage:failure.message});
            }
        );
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");
    //     return true;
    // }

    // static getDerivedStateFromProps(){
    //     console.log("shouldComponentUpdate");
    // }

    // getSnapshotBeforeUpdate(){
    //     console.log("getSnapshotBeforeUpdate");
    // }

    renderHelper(){
        if(this.state.errorMessage === '' && this.state.latitude==null){
            return <Spinner loadingText="Please Allow current locaton to proceed..."/>
        }else{
            if(this.state.latitude!=null){
                return <SeasonDisplay latitude={this.state.latitude}/>
            }else{
                return <div>Error : {this.state.errorMessage}</div> 
            }
        }
    }

    // required method
    render(){
        console.log("render is triggered with latitude : "+this.state.latitude);
        return (
            <div className="border red">
                {this.renderHelper()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);