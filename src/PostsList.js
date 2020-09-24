

//  * should view all posts in the system in cards view

import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import {useHistory} from 'react-router-dom'

export default function PostsList({ blogs }) {
    const history = useHistory()
    function redirect(e) {
        console.log(e.target.id)
        history.push(`/${e.target.id}`)
    }

    console.log(blogs)
    return (
<>
            {blogs.map(blog => (
                <Col xs="4" key={blog.id}>
                    < Card >
                        <CardBody>
                            <CardTitle>Title: {blog.title}</CardTitle>
                            <CardSubtitle>Description: {blog.description}</CardSubtitle>
                            <Button id={blog.id} onClick={redirect}>Read</Button>
                        </CardBody>
                    </Card >
                </Col>
                ))

            }
            </>
    )
}