import BlogApi from './API'


function getPostsFromApi() {
    return async function (dispatch) {
        let { data } = await BlogApi.getAllPosts()
        dispatch(gotPosts(data))
    }
}


function gotPosts(data) {
    return {
        type: "GET_POSTS",
        blogs: data
    }
}


export { getPostsFromApi}