import axios from "axios";



const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

class BlogApi{


    //  * get all posts
    static async getAllPosts() {
        let res = await axios.get(`${BASE_URL}/api/posts`)
        console.log(" at the api page getting posts")
        return res
    }
    static async getAllComments(id) {
        let res = await axios.get(`${BASE_URL}/api/posts/${id}/comments`)
        console.log(" at the api page, getting comments ")
        return res
    }
}

export default BlogApi