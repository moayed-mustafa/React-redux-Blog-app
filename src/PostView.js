


//  * should view a post with a certain id

import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText, Col, Row
} from 'reactstrap';
import Welcome from './Welcome'



export default function PostView({ blogs }) {


    // console.log(blogs)
    const { id } = useParams()
    // const blog = blogs.id
    let blog = blogs.filter(blog=> blog.id === id)[0]

    console.log(blog, id)
    // if (blog === undefined) {
    //     return  <h1>Nothing to show yet</h1>
    // }

    return (

        <Row className="m-3">
            <Col xs="12">
                <Welcome/>
            </Col>
            <Col xs="12" key={id}>
                    < Card >
                        <CardBody>
                            <CardTitle>Title:{blog.title}</CardTitle>
                    <CardSubtitle>Description: {blog.description}</CardSubtitle>
                    <CardText> {blog.body}</CardText>
                        </CardBody>
                    </Card >
            </Col>
        </Row>
    )

}