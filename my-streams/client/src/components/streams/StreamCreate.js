import React from 'react';
import {createStream} from '../../actions/index'
import StreamForm from './StreamForm';
import {connect} from 'react-redux';

class StreamCreate extends React.Component{
    // we should navigate user back to streams after created new stream
    // but adding programmatic nagivation will cause direction even before api updated to DB
    onFormSubmit = (formValues)=>{
        //console.log(formValues);
        this.props.createStream(formValues);
    }

    render(){
        return (
            <div>
                <h3>Create New Stream</h3>
                <StreamForm 
                onFormSubmit= {this.onFormSubmit}
            />
            </div>
        )
    }
}

export default connect(null,{createStream})(StreamCreate);
