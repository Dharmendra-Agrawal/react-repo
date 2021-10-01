import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    //initialize the Google auth client once
    componentDidMount(){
        // add init in the callback as loading libs might take time
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '203066519100-6coesg185pepbcnibk2su4rbgucn0m6p.apps.googleusercontent.com',
                scope: 'email'
            }).then(
                ()=>{
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.updateSigningStatus(this.auth.isSignedIn.get());
                    // instead of the checking status on sign in or out button click we can register listener below
                    this.auth.isSignedIn.listen(this.updateSigningStatus);
                }
            );
        });
    }

    // this handler will be called everytime user signs in or out
    updateSigningStatus = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    }

    signOutClick = ()=>{
        this.auth.signOut();
    }

    signInClick = ()=>{
        this.auth.signIn();
    }

    renderAuthButton(){
        if(this.props.isSignedIn==null){
            return null;
        }else if(this.props.isSignedIn){
            return <button  
                className="ui red google button"
                onClick = {this.signOutClick}
                >
                <i className="google icon"/>
                Signout from Google
            </button>
        }else{
            return <button 
                className="ui red google button"
                onClick = {this.signInClick}
            >
                <i className="google icon"/>
                Sign into Google
            </button>
        }
    }

    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    //console.log(state.auth);
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);