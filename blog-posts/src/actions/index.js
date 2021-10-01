import jsonPlaceHolders from "../apis/jsonPlaceHolders"
import _ from 'lodash';

// export const fetchPosts = ()=>{
//     return async (dispatch)=>{
//         var response = await jsonPlaceHolders.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload : response
//         })
//     }
// }

export const fetchPostsAndUsers = ()=> async (dispatch, getState)=>{
    // console.log('fetching posts ');
     // calling fetchPost action creator
     await dispatch(fetchPosts());
     // console.log('fetched posts ');
     // fetch the posts from the state
     // console.log(getState().posts);

     // use lodash to get unique list of userids
    // const uniqueUserIds =  _.uniq(_.map(getState().posts,'userId'));
    // console.log(uniqueUserIds);

    // make call to fetch each userId only once
    // uniqueUserIds.forEach(userId=>{dispatch(fetchUser(userId))});

    // we can use lodash chaining concept to compact the code
    _.chain(getState().posts)
        .map('userId') //gets post automatically
            .uniq()
                .forEach(userId=>dispatch(fetchUser(userId)))
                    .value();
     
}

//ES 2016
export const fetchPosts = ()=> async dispatch=>{
        var response = await jsonPlaceHolders.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload : response.data
        });
}

// version 1
// export const fetchUser = (userId)=> async dispatch=>{
//     var response = await jsonPlaceHolders.get(`/users/${userId}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload : response.data
//     });
// }

// version 2
// export const fetchUser = function(userId){ 
//     return _.memoize(async function(dispatch){    
//         var response = await jsonPlaceHolders.get(`/users/${userId}`);
//         dispatch({
//             type: 'FETCH_USER',
//             payload : response.data
//         });
//     })
// }

// version 3
// export const fetchUser = function(userId){ 
//     return function(dispatch){
//         return _fetchUser(userId, dispatch);
//     }
// }

// const _fetchUser =  _.memoize(async (userId, dispatch)=>{
//     var response = await jsonPlaceHolders.get(`/users/${userId}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload : response.data
//     });
// });

// version 4
export const fetchUser = (userId)=> async dispatch=>{
    var response = await jsonPlaceHolders.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USER',
        payload : response.data
    });
}



