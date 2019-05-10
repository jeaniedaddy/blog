import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';



export const fetchPosts = ()=> async (dispatch)=>{
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data});
};

// export const fetchUser = (id)=> async (dispatch)=>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     //console.log(response.data);
//     dispatch({ type: 'FETCH_USER', payload: response.data});
// };

const _fetchUser= _.memoize(async (id,dispatch) =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data});
});

export const fetchUser = (id)=>  async (dispatch)=>_fetchUser(id,dispatch);

