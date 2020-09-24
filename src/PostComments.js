
import React, { useState,useContext } from 'react'
import BlogsContext from './BlogsContext'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';


import { Form, Input,Button, FormGroup} from 'reactstrap'

export default function PostComments() {
    // const [comments, setComments] = useState()
    // const { id } = useParams()
    const { id } = useParams()
    const {blogs, setBlogs} = useContext(BlogsContext)
    const comments = blogs.filter(blog => blog.id === id)[0].comments
    const [formData, setFormData] = useState({ id:uuid(),  comment: "" })

    function changeComment(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }

    function submit(e) {
        e.preventDefault()
        let clone = [...blogs]
        clone.filter(blog => blog.id === id)[0].comments.push(formData)
        setBlogs(data=> data=clone)

    }

    function deleteComment(e) {

        //  *rethink this
        let clone = [...blogs]
        let comments = clone.filter(blog => blog.id === id)[0].comments
        console.log(comments)
        let found = comments.filter(comment => comment.id === e.target.id)[0]
        console.log(found)
        console.log(comments.indexOf(found))
        comments = comments.splice(comments[found], comments[found])
        clone.filter(blog => blog.id === id)[0].comments = comments
        setBlogs(data=> data= clone)
    }
    // console.log(comments)
    return (
        <div className="m-2">
            <h3>Comments</h3>
            {comments.map((comment, i) => (
                <p key={i}>
                    <span role="img"
                        aria-label="emoji"
                            onClick={deleteComment}
                            id={comment.id}>
                        ❌
                    </span> {` ${comment.comment}`}
                    </p>
            ))}
            <Form onSubmit={submit}>
                <FormGroup>
                    <Input type="text" name="comment" onChange={changeComment} value={formData.comment}></Input>
                    <Button  className="m-2"color="primary">Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}