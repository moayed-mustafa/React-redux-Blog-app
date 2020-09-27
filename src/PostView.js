


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

    //  todo: remove this
    const history = useHistory()
    //  * an action function to  delete the blog
    // todo: this should dispatch an action
    const dispatch = useDispatch()
    function deleteBlog(e) {
        e.persist()
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
                            <b><CardTitle>Title:{blogData[0].title}</CardTitle></b>
                    <CardSubtitle>Description: {blogData[0].description}</CardSubtitle>
                    <CardText> {blogData[0].body}</CardText>
                        </CardBody>
                    </Card >
            </Col>
            <Col xs="6">
            <PostComments  />
            </Col>
        </Row>
    )

}