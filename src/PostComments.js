
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
// import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'


import { Form, Input, Button, FormGroup } from 'reactstrap'
import {addCommentOnApi, deleteCommentOnApi,updateCommentOnApi} from './actionCreators'

export default function PostComments() {
    const { id } = useParams()
    // *move this away, replace it with store
    const blogs = useSelector(st => st)
    const dispatch = useDispatch()

    const comments = blogs[id].comments
    const [formData, setFormData] = useState({ text: "" })
    let [updateCommentButton, setUpdateComment] = useState(false)

    function changeComment(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }


    function submit(e) {
        e.preventDefault()
        dispatch(addCommentOnApi(formData, id))
        setFormData({text: "" })

    }

    function deleteComment(e) {
        dispatch(deleteCommentOnApi(id, e.target.id))
    }
    function updateComment(e) {

        dispatch(updateCommentOnApi(formData, id))
        setFormData({ text: "" })
        setUpdateComment(false)
    }
    function setupUpdateComment(e) {
        setUpdateComment(true)
        let comment = comments.filter(comment => comment.id === e.target.id)[0]
        setFormData(data => data = comment)
    }
    return (
        <div className="m-2">
            <h3>Comments</h3>
        {
                comments.length > 0 ?
            comments.map((comment, i) => (
                <p key={i}>
                    <span role="img"
                        aria-label="emoji"
                            onClick={deleteComment}
                        id={comment.id}
                    className="m-2">
                        ❌
                    </span>
                    <span role="img"
                        aria-label="emoji"
                            onClick={setupUpdateComment}
                        id={comment.id}
                    className="m-2">
                        🖋
                    </span>
                    {` ${comment.text}`}
                    </p>
            ))
            :
            <h4>No comments to show...</h4>
        }
            <Form onSubmit={submit}>
                <FormGroup>
                    <Input type="text" name="text" onChange={changeComment} value={formData.text}></Input>
                    {!updateCommentButton?<Button className="m-2" color="primary">Add</Button>: null}
                    {updateCommentButton? <Button onClick={updateComment} className="m-2" color="warning">Update</Button>: null}
                </FormGroup>
            </Form>
        </div>
    )
}