import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    deleteAction = ()=>{

    }

    renderActionButtons(stream){
        if(stream.userId === this.props.currentUserId){
            return (
            <div className="ui right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary"> Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative"> Delete</Link>    
            </div>);
        }
    }

    renderList(){
        return this.props.streams.map(stream=>{
            return (
                <div className="item" key={stream.id}>
                    {this.renderActionButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreateButton(){
        return (
            <Link to="/streams/new" className="ui right floated button primary">
                Create Stream
            </Link>
        );
    }

    render(){
        //console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                { this.props.isSignedIn && this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        //convert object to array
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);