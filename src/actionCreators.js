import BlogApi from './API'


function getPostsFromApi() {
    return async function (dispatch) {
        let { data } = await BlogApi.getAllPosts()
        dispatch(gotPosts(data))
    }
}

function makePostOnApi(post) {
    console.log('at the action craetor making a post')
    return async function (dispatch) {
        let { data } = await BlogApi.createPost(post)
        dispatch(createdPost(data))
    }
}

function updatePostOnApi(postData) {
    console.log(postData)
    console.log("at the action creator updating a post")
    return async function (dispatch) {
        let { data } = await BlogApi.updatePost(postData)
        console.log(data)
        dispatch({type: "UPDATE_POST", blog:data})
    }
}

function deleteBlogPost(id) {
    console.log('at the action craetor deleting a post')
    return async function (dispatch) {
        await BlogApi.deletePost(id)
        dispatch({type:"DELETE_POST", id})
    }
}

function addCommentOnApi(comment, postId) {
    console.log('at the action craetor crating a comment')
    return async function (dispatch) {
        let { data } = await BlogApi.addComment(comment, postId)
        dispatch({type:"ADD_COMMENT_ON_POST", comment:data, postId})
    }
}

function deleteCommentOnApi(postId, commentId) {
    console.log('at the action craetor deleting a post')
    return async function (dispatch) {
        await BlogApi.deleteComment(postId,commentId)
        dispatch({type:"DELETE_COMMENT_FROM_POST", commentId, postId})
    }
}



//  * Actual Dispatchers
function gotPosts(data) {
    return {
        type: "GET_POSTS",
        blogs: data
    }
}
function createdPost(data) {
    console.log(data)
    return {
        type: "ADD_NEW_POST",
        blog: data
    }
}


export { getPostsFromApi, makePostOnApi, deleteBlogPost, updatePostOnApi,addCommentOnApi, deleteCommentOnApi}