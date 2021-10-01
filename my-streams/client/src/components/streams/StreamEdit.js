import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{

    componentDidMount(){
        // we may want to fetch fresh stream data from DB
        // if url is accessed directly then streams won't be available, so invoke fetchStream
        this.props.match.params.id && this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formValues)=>{
        //console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }
    
    render(){
        if(!this.props.stream){
            return <div></div>
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    onFormSubmit = {this.onFormSubmit}
                    // initialValues is special property of the redux form which will apply initial values to the form
                    //initialValues = {this.props.stream}
                    initialValues = {_.pick(this.props.stream,'title','description')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    const streamId = ownProps.match.params.id;
    return {
        stream: state.streams[streamId]
    };
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);