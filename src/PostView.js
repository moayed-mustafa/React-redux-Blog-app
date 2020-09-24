


//  * should view a post with a certain id

import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText, Col, Row
} from 'reactstrap';
import Welcome from './Welcome'
import PostComments from './PostComments'


export default function PostView({ blogs }) {


    //  * Add the comments page here

    // console.log(blogs)
    const { id } = useParams()
    // const blog = blogs.id
    let blog = blogs.filter(blog=> blog.id === id)[0]

    return (

        <Row className="m-3">
            <Col xs="12">
                <Welcome/>
            </Col>
            <Col xs="12" key={id}>
                    < Card >
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