


//  * should view a post with a certain id

import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText, Col, Row
} from 'reactstrap';
import Welcome from './Welcome'
import PostComments from './PostComments'
import { useDispatch, useSelector } from 'react-redux'
import {deleteBlogPost} from './actionCreators'




export default function PostView() {




    const blogs = useSelector(st=> st)
    const { id } = useParams()


    const history = useHistory()

    const dispatch = useDispatch()
    function deleteBlog(e) {
        e.persist()
        // dispatch({ type: "DELETE_POST", id })
        dispatch(deleteBlogPost(id))
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
                            <b><CardTitle>Title:{blogs[id].title}</CardTitle></b>
                    <CardSubtitle>Description: {blogs[id].description}</CardSubtitle>
                    <CardText> {blogs[id].body}</CardText>
                        </CardBody>
                    </Card >
            </Col>
            <Col xs="6">
            <PostComments  />
            </Col>
        </Row>
    )

}