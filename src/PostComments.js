
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'


import { Form, Input,Button, FormGroup} from 'reactstrap'

export default function PostComments() {
    const { id } = useParams()
    // *move this away, replace it with store
    const blogs = useSelector(st => st)
    const dispatch = useDispatch()

    const comments = blogs[id].comments
    const [formData, setFormData] = useState({ id:uuid(),  text: "" })

    function changeComment(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }


    function submit(e) {
        e.preventDefault()
        dispatch({ type: "ADD_COMMENT_ON_POST", comment: formData, id })
        setFormData({ id:uuid(),  text: "" })

    }

    function deleteComment(e) {
         //  todo dispatch an action here too
        dispatch({type:"DELETE_COMMENT_FROM_POST", id, commentId: e.target.id})
    }
    return (
        <div className="m-2">
            <h3>Comments</h3>
        {
                comments ?
            comments.map((comment, i) => (
                <p key={i}>
                    <span role="img"
                        aria-label="emoji"
                            onClick={deleteComment}
                            id={comment.id}>
                        ❌
                    </span> {` ${comment.text}`}
                    </p>
            ))
            :
            <h1>No comments to show...</h1>
        }
            <Form onSubmit={submit}>
                <FormGroup>
                    <Input type="text" name="text" onChange={changeComment} value={formData.text}></Input>
                    <Button  className="m-2"color="primary">Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}