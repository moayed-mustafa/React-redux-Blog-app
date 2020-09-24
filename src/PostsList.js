

//  * should view all posts in the system in cards view

import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import { useHistory } from 'react-router-dom'



export default function PostsList({ blogs }) {
    const history = useHistory()
    function redirect(e) {
        console.log(e.target.id)
        history.push(`/${e.target.id}`)
    }

    console.log(blogs)
    if (blogs.length === 0) {
        return <h3>No Blogs yet....</h3>
    }
    return (
<>
            {blogs.map(blog => (
                <Col xs="4" key={blog.id}>
                    < Card >
                        <CardBody>
                            <b><CardTitle>Title: {blog.title}</CardTitle></b>
                            <CardSubtitle>Description: {blog.description}</CardSubtitle>
                            <Button color="info" id={blog.id} onClick={redirect}>Read</Button>
                        </CardBody>
                    </Card >
                </Col>
                ))

            }

            </>
    )
}