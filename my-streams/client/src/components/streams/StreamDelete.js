import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onClickDelete = ()=>{
        this.props.deleteStream(this.props.match.params.id);
    }

    actions = (
            <React.Fragment>
                <button className="ui button negative" onClick= {this.onClickDelete}>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
    );

    onDismiss = ()=>{
        history.push("/");
    }

    renderContent(stream){
        return <div>
            Are you sure, you want to delete stream
            <span style= {{color:'green'}}>
                {stream?stream.title:''}
            </span>
        </div>
    }

    render(){
        return (
            <Modal
                title= "Delete Stream"
                content = {this.renderContent(this.props.stream)}
                actions = {this.actions}
                onDismiss = {this.onDismiss}
            ></Modal>
        );
    }
    
}

const mapStateToProps = (state, ownProps)=>{
    return {
        stream : state.streams? state.streams[ownProps.match.params.id]: undefined
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
