


const initialState =   {}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_POSTS":
            let data = {}
             action.blogs.forEach(blog => (data[blog.id]= blog ))
            return { ...state, ...data }

        case "ADD_NEW_POST":
            console.log(" at the reducer making a post")
            return { ...state, [action.blog.id]: action.blog }
        case "UPDATE_POST":
            return {...state,[action.blog.id]: action.blog }

        case "DELETE_POST":
            let newState = { ...state }
            delete newState[action.id]
            return newState

        case "ADD_COMMENT_ON_POST":
            let comments = state[action.postId].comments
            comments.push(action.comment)
            state[action.postId].comments = comments
            return { ...state }

        case "UPDATE_COMMENT_ON_POST":
            let postComments = state[action.postId].comments
            let newComments = postComments.filter(comment => comment.id !== action.data.id)
            newComments.push(action.data)
            state[action.postId].comments = newComments
            return { ...state }

        case "DELETE_COMMENT_FROM_POST":
            let allComments = [...state[action.postId].comments]
            let filteredComments = allComments.filter(comment => comment.id !== action.commentId)
            state[action.postId].comments = filteredComments
            return { ...state }

        case "VOTE":
            let votes = state[action.id].votes
            votes = action.data.votes
            state[action.id].votes = votes
            return {...state}


        default:
            return state
    }
}