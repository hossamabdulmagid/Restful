import postTypeAction from './postType'
import Axios from 'axios';

const url = `http://jsonplaceholder.typicode.com/posts`;

const urlId = `http://jsonplaceholder.typicode.com/posts/`;


const postStart = () => ({
    type: postTypeAction.GET_POSTS_START,
})

const postsSuccess = (data) => ({
    type: postTypeAction.GET_POSTS_SUCCESS,
    payload: data,
})



const postsError = error => {
    if (error) {
        return {
            type: postTypeAction.GET_POSTS_ERROR,
            payload: error,
        }
    }
}


export const getAllPosts = () => {
    let hasError = false;
    return dispatch => {
        dispatch(postStart())
        fetch(url)
            .then(response => response.json())
            .then((json, error) => {
                if (error) {
                    hasError = true;
                    dispatch(postsError(error))
                    console.log(error, `error`)
                } else if (!hasError) {
                    dispatch(postsSuccess(json))
                }
            })
            .catch(error => {
                dispatch(postsError(error))
                console.log(error, `error`)
            })
    }
}




const singlePostStart = () => ({
    type: postTypeAction.GET_SINGLEPOST_START,
})

const singlePostSuccess = (data) => ({
    type: postTypeAction.GET_SINGLEPOST_SUCCESS,
    payload: data,
})


const singlePostError = (error) => ({
    type: postTypeAction.GET_SINGLEPOST_ERROR,
    payload: error
})





export const GetSinglePost = (id) => {
    let hasError = false;
    console.log(`id has peen Called While ${id}`)
    return dispatch => {
        dispatch(singlePostStart())
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then((data, error) => {
                if (error) {
                    hasError = true;
                    dispatch(singlePostError(error))
                    console.log(error, `error From ActionFiles`)
                } else if (data && !hasError && !error) {
                    dispatch(singlePostSuccess(data))
                }
            })
            .catch(error => {
                dispatch(singlePostError(error))
            })
    }
}



const editStart = () => ({
    type: postTypeAction.EDIT_SINGLEPOST_START
});


const editSuccess = (data) => ({
    type: postTypeAction.EDIT_SINGLEPOST_SUCCESS,
    payload: data
});

const editError = (error) => {
    if (error) {
        return {
            type: postTypeAction.EDIT_SINGLEPOST_ERROR,
            payload: error,
        }
    }
}

export const EditPost = (title) => {
    let hasError = false;
    return dispatch => {
        async function GonaEditPost() {
            dispatch(editStart())
            try {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title })
                }
                await fetch(`http://jsonplaceholder.typicode.com/posts/1`, requestOptions)
                    .then(response => response.json())
                    .then((response, error) => {
                        if (error) {
                            hasError = true;
                            dispatch(editError(error))
                            console.log(error, `error`)
                        } else if (!hasError && response) {
                            dispatch(editSuccess(response))
                        }
                    }
                    ).catch(error => {
                        dispatch(editError(error))
                        console.log(error, `error`)
                    })

            } catch (error) {
                dispatch(editError(error))
                console.log(error, `error`)
            }
        }
        GonaEditPost();
    }
}


const DeleteStart = () => ({
    type: postTypeAction.DELETE_SINGLEPOST_START,
})
const DeleteSuccess = (data) => ({
    type: postTypeAction.DELETE_SINGLEPOST_SUCCESS,
    payload: data,
})
const DelteError = (error) => ({
    type: postTypeAction.DELETE_SINGLEPOST_ERROR,
})

export const doDeletePost = id => {
    let hasError = false;
    return dispatch => {
        dispatch(DeleteStart())
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        }
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
            .then((response, error) => {
                if (error) {
                    hasError = true;
                    dispatch(DelteError(error))

                } else if (!hasError) {
                    dispatch(DeleteSuccess(response))
                }
            })
            .catch(error => {
                dispatch(DelteError(error))
            })
    }
}