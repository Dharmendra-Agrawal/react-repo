import React from 'react';

class GoogleMaps extends React.Component{
    divRef = React.createRef();

    componentDidMount(){
        console.log(window.google.maps);
        console.log(this.divRef.current);
        const map= new window.google.maps.Map(
            this.divRef.current,{
                zoom: 12,
                center:{
                    lng: this.props.lng,
                    lat: this.props.lat
                }
            }
        );
    }

    render(){
        return (
            <div ref={this.divRef} id="myMap"> 
                GoogleMaps
            </div>
        );
    }
}

export default GoogleMaps;