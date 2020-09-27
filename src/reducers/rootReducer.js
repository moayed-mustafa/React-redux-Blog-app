


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
            delete (state[action.id])
            return {...state}
        case "ADD_COMMENT_ON_POST":
            console.log(state[action.postId].comments)
            let comments = state[action.postId].comments
            comments.push(action.comment)
            state[action.postId].comments = comments
            return {...state}
        case "DELETE_COMMENT_FROM_POST":
            let allComments = [...state[action.postId].comments]
            let filteredComments = allComments.filter(comment => comment.id !== action.commentId)
            state[action.postId].comments = filteredComments
            return {...state}


        default:
            return state
    }
}