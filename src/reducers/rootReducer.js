


const initialState =   {}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_POSTS":
            return {...state, ...action.blogs }

        case "ADD_NEW_POST":
            return {...state, [action.blog.id]:action.blog}

        case "DELETE_POST":
            delete (state[action.id])
            return {...state}
        case "ADD_COMMENT_ON_POST":
            let comments = [...state[action.id].comments]
            comments.push(action.comment)
            state[action.id].comments = comments
            return {...state}
        case "DELETE_COMMENT_FROM_POST":
            let allComments = [...state[action.id].comments]
            let filteredComments = allComments.filter(comment => comment.id !== action.commentId)
            state[action.id].comments = filteredComments
            return {...state}


        default:
            return state
    }
}