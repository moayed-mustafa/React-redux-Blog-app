import axios from "axios";



const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

class BlogApi{


    //  * get all posts
    static async getAllPosts() {
        let res = await axios.get(`${BASE_URL}/api/posts`)
        console.log(" at the api page getting posts")
        return res
    }

    //  *   create a new post
    static async createPost(data) {
        let res = await axios({
            method: 'POST',
            url: `${BASE_URL}/api/posts`,
            data

        })
        return res
    }
    static async getAllComments(id) {
        let res = await axios.get(`${BASE_URL}/api/posts/${id}/comments`)
        console.log(" at the api page, getting comments ")
        return res
    }


    static async deletePost(id) {
        await axios.delete(`${BASE_URL}/api/posts/${id}/`)
    }

    static async updatePost(postData) {
        let res = await axios({
            method: 'PUT',
            url: `${BASE_URL}/api/posts/${postData.id}/`,
            data:postData
        })
        return res
    }


    static async addComment(data, id) {
        // app.use("/api/posts/:post_id/comments", postCommentsRoutes);
        let res = await axios({
            method: 'POST',
            url: `${BASE_URL}/api/posts/${id}/comments/`,
            data
        })
        return res
    }

    static async updateComment(id, data) {
        console.log(id, data)
        let res = await axios({
            method: "PUT",
            url: `${BASE_URL}/api/posts/${id}/comments/${data.id}`,
            data
        })
        return res

    }

    static async deleteComment(postId,commentId) {
        await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`)
    }

    static async Vote(id, direction) {
        "/:id/vote/:direction"
        let res = await axios({
            method: "POST",
            url: `${BASE_URL}/api/posts/${id}/vote/${direction}`
        })
        return res
    }
}

export default BlogApi