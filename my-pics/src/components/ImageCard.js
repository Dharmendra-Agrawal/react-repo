import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {spans:0};

        // ref creates reference to the DOM element
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //this is too early to get componet height as it might be still loading it
        //console.log(this.imageRef.current.clientHeight);

        //add an eventlistener
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = ()=>{
        const height= this.imageRef.current.clientHeight;
        //grid-auto-rows: 10px; defines per row height
        const spans = Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div style = {{gridRowEnd : `span ${this.state.spans}`}}>
                <img 
                    ref = {this.imageRef}
                    src = {urls.regular}
                    alt = {description}
                />
            </div>
        );
    }
}

export default ImageCard;