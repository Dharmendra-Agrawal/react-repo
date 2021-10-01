import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props=>{
    //console.log(props);
    return ReactDOM.createPortal(
        // close the modal when user clicks outside
        <div className="ui dimmer modals visible active" onClick= {props.onDismiss}>
            {/* make sure clicking inside the div doesn't run event propagation as children element doesn't have any event defined */}
            <div className="ui standard modal visible active" onClick= {(e)=>{e.stopPropagation()}}>
                <i className="close icon" onClick= {props.onDismiss}></i>
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;