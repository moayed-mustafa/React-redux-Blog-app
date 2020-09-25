


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




export default function PostView({ blogs }) {


    //  * Add the comments page here

    const { id } = useParams()
    let blog = blogs.filter(blog => blog.id === id)[0]

    const { setBlogs } = useContext(BlogsContext)
    const history = useHistory()
    //  * an action function to  delete the blog
    function deleteBlog(e) {
        e.persist()
        console.log(blogs.filter(blog => blog.id !== e.target.parentElement.id))
        setBlogs(data => data = data.filter(blog => blog.id !== e.target.parentElement.id))
        history.push("/")

    }
    //  * an action function to  edit the bog
    function editBlog(e) {
        console.log(e.target.parentElement.id)
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
                            <b><CardTitle>Title:{blog.title}</CardTitle></b>
                    <CardSubtitle>Description: {blog.description}</CardSubtitle>
                    <CardText> {blog.body}</CardText>
                        </CardBody>
                    </Card >
            </Col>
            <Col xs="6">
                {/*  I want to add comments here */}
            <PostComments blogs={blogs} />
            </Col>
        </Row>
    )

}