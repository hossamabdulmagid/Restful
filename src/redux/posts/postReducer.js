import postTypeAction from './postType'

const INITAIL_STATE = {
    loading: false,
    posts: [],
    singlePost: { title: '' },
    error: null,
    Response: null,
}

const postReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case postTypeAction.GET_POSTS_START:
            return {
                ...state,
                loading: true,
            }
        case postTypeAction.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case postTypeAction.GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        case postTypeAction.GET_SINGLEPOST_START:
            return {
                ...state,
                loading: true,
            }
        case postTypeAction.GET_SINGLEPOST_SUCCESS:
            return {
                ...state,
                loading: false,
                singlePost: action.payload,
            }
        case postTypeAction.GET_SINGLEPOST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        case postTypeAction.EDIT_SINGLEPOST_START:
            return {
                ...state,
                loading: true,
            }
        case postTypeAction.EDIT_SINGLEPOST_SUCCESS:
            return {
                ...state,
                loading: false,
                singlePost: action.payload,
            }
        case postTypeAction.EDIT_SINGLEPOST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case postTypeAction.DELETE_SINGLEPOST_SUCCESS:
            return {
                ...state,
                loading: false,
                Response: action.payload
            }
        default:
            return state;
    }
}
export default postReducer