import axios from "axios";



const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

class BlogApi{


    //  * get all posts
    static async getAllPosts() {
        // try {
        let res = await axios.get(`${BASE_URL}/api/posts`)
        console.log(" at the api page")
        return res
        // } catch (e) {
        //     console.log(e)
        // }
    }
}

export default BlogApi