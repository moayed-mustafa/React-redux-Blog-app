

//  * should view all posts in the system in cards view

import React, {useEffect} from 'react'
import {
    Card, CardBody, Badge,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getPostsFromApi,voteOnApi} from './actionCreators'




export default function PostsList() {

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


    function vote(e) {
        dispatch(voteOnApi(e.target.id, e.target.title))
    }
    return (
<>
            {blogData.sort((a,b)=> b.votes - a.votes).map(blog => (
                <Col xs="4" key={blog.id} className="m-2">
                    < Card >
                        <CardBody>
                            <b><CardTitle>Title: {blog.title}</CardTitle></b>
                            <CardSubtitle>Description: {blog.description}</CardSubtitle>
                            <Button color="info" id={blog.id} onClick={redirect}>Read</Button>
                            <Button color="dark" outline className="m-1">
                              <Badge  className="m-1 p-2"  color="primary"> <span>  <b>Votes: {blog.votes}</b> </span></Badge>
                              <Badge className="m-1 p-2" color="success">  <span id={blog.id}  onClick={vote} title="up"  role="img" aria-label="emoji"className="m-2" >👍🏼</span> </Badge>
                              <Badge className="m-1 p-2"  color="danger">   <span  id={blog.id} onClick={vote} title="down" role="img" aria-label="emoji" className="m-2">👎🏼</span> </Badge>
                            </Button>
                        </CardBody>
                    </Card >
                </Col>
                ))

            }

            </>
    )
}