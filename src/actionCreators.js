import BlogApi from './API'


function getPostsFromApi() {
    return async function (dispatch) {
        console.log("at action creator")
        let res =  await BlogApi.getAllPosts()
        dispatch(gotPosts(res))
    }
}



function gotPosts(data) {
    console.log(data)
    return {
        type: "GET_POSTS",
        blogs: data
    }
}

export { getPostsFromApi}