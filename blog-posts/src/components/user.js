import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component{
    render(){
        // console.log(this.props.user);
        if(!this.props.user){
            return null;
        }
        return <div className="header">
            {this.props.user.name}
        </div>
    }
}

const mapStateToProps = (state, ownProps)=>{
    if(!state.users){
        return null;
    }
    return {
        user: state.users.find(user=>{return user.id === ownProps.userId})
    }
}

export default connect(mapStateToProps)(User);