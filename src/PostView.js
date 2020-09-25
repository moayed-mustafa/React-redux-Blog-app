


//  * should view a post with a certain id

import React, {useContext} from 'react'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText, Col, Row
} from 'reactstrap';
import Welcome from './Welcome'
import PostComments from './PostComments'
import BlogsContext from './BlogsContext'
import {useDispatch} from 'react-redux'




export default function PostView({ blogs }) {


    //  todo remove the context, add more prop, setBlogs
    //  * Add the comments page here

    const { id } = useParams()
    //  todo: this is not going to work, use Object.values
    let blogData = Object.values(blogs)
    // let blog = blogs.filter(blog => blog.id === id)[0]

    //  todo: remove this
    // const { setBlogs } = useContext(BlogsContext)
    const history = useHistory()
    //  * an action function to  delete the blog
    // todo: this should dispatch an action
    const dispatch = useDispatch()
    function deleteBlog(e) {
        e.persist()
        // console.log(blogs.filter(blog => blog.id !== e.target.parentElement.id))
        // setBlogs(data => data = data.filter(blog => blog.id !== e.target.parentElement.id))
        dispatch({ type: "DELETE_POST", id })
        history.push("/")

    }
    //  * an action function to  edit the bog

    function editBlog(e) {
        history.push(`/new/${e.target.parentElement.id}`)
    }

    return (

        <Row className="m-3">
            <Col xs="12">
                <Welcome/>
            </Col>
            <Col xs="12" key={id}>
                < Card id={id} >
                    <span onClick={deleteBlog}
                        role="img"
                            aria-label="emoji">❌</span>
                    <span onClick={editBlog}
                        role="img"
                            aria-label="emoji">🖋</span>

                        <CardBody>
                            <b><CardTitle>Title:{blogData.title}</CardTitle></b>
                    <CardSubtitle>Description: {blogData.description}</CardSubtitle>
                    <CardText> {blogData.body}</CardText>
                        </CardBody>
                    </Card >
            </Col>
            <Col xs="6">
            <PostComments  />
            </Col>
        </Row>
    )

}