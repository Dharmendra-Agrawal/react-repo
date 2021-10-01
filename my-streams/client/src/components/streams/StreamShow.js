import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component{
    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchStream(id);

        this.player = flv.createPlayer(
            {
                type:'flv',
                url: `http://localhost:8000/live/${id}.flv`
            }
        );

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        //this.player.play();
    }

    componentWillUnmount(){
        //"This will execute when component is destroyed", we need to destroy the player
        this.player && this.player.destroy();
    }

    renderStreamDetails(){
        if(!this.props.stream){
            return <div>Loading...</div>;
        }
        const {title, description} = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }

    render(){
        
        return (
            <div>
                <video 
                    ref= {this.videoRef}
                    style= {{width: '100%'}}
                    controls
                ></video>
                {this.renderStreamDetails()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    console.log(state);
    return {
        stream: state.streams? state.streams[ownProps.match.params.id]: undefined
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);