

//  * should view all posts in the system in cards view

import React, {useEffect} from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getPostsFromApi} from './actionCreators'


//  todo this is where I want to make a request to my api
//  todo: instead of having the blogs coming down, I will make a request here to get all blogs from my database


export default function PostsList() {
    // let blogData = Object.values(blogs)
    // let blogData = "get the stuff from the backend"
    // let Ids = Object.keys(blogs)

    const dispatch = useDispatch()
    useEffect(() => {

            dispatch(getPostsFromApi())

    }, [dispatch])
    const blogs = useSelector(st => st)
    let blogData = Object.values(blogs)
    const history = useHistory()
    function redirect(e) {
        history.push(`/${e.target.id}`)
    }

    if (blogData.length === 0) {
        return <h3>No Blogs yet....</h3>
    }
    return (
<>
            {blogData.map(blog => (
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