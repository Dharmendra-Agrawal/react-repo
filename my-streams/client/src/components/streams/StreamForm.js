import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {createStream, editStream} from '../../actions/index'

class StreamForm extends React.Component{
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                        {error}
                </div>
            );
        }
    }

    rederInput = (inputProps)=>{
        // any error message on the field will be passed here
        const fieldClass = `field ${inputProps.meta.touched && inputProps.meta.error ? 'error':''}`;
        return (
            <div className={fieldClass}>
                <label>{inputProps.label}</label>
                <input {...inputProps.input} autoComplete="off"/>
                {this.renderError(inputProps.meta)}
            </div>
        )
    }

    render(){
        //const stream = this.props.initialValues?this.props.initialValues:{};
        return (
            // ui form error- if you dont append error then form will hide all the errors
            <form className="ui form error" onSubmit = {this.props.handleSubmit(this.props.onFormSubmit)}>
                <Field name="title" component = {this.rederInput} label= "Enter Title"/>
                <Field name="description" component = {this.rederInput} label="Description"/>
                <button className="ui primary button">Submit</button>
            </form>
        )
    }
}

const formValidator = formValues=>{
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter title";
    }

    if(!formValues.description){
        errors.description = "You must add description";
    }
    return errors;
};

//reduxForm is quite similar to connect() function of redux
export default reduxForm(
    {
        form: 'StreamForm', //this will create new entry in state for this form
        validate: formValidator
    }
)(StreamForm);
