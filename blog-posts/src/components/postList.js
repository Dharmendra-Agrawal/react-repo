import React from 'react';
import {fetchPostsAndUsers} from '../actions';
import {connect} from 'react-redux';
import User from './user';

class PostList extends React.Component{
    state = {posts:0};
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderedItems = ()=>{
        // console.log('renderedItems'+this.props.posts);
        return this.props.posts.map(post=>{
            return (
                <div className= "item" key={post.id}>
                    <i className="large middle aligned icon user">
                    </i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <User userId = {post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render(){
        // console.log(this.renderedItems());
        return (
            <div className="ui relaxed divided list">
                {this.renderedItems()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {    
            posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);