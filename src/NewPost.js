
//  * should show a form and two buttons, one to submit the form, the other  to cancel/redirects to home

import React, {useState} from 'react'
import {
    Container, Row, Col,
    Form, Input, Label, Button, FormGroup
} from 'reactstrap'
import { useHistory, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import {useSelector, useDispatch} from 'react-redux'





export default function NewPost() {

    //  todo: remove the props, import useSelector to get the store and useDispatch to dispatch actions
    const { id } = useParams()
    const blogs = useSelector(st => st)


    // todo: will need to change the composition of this ternary operator soon
    //  * if id is not available: start out with an empty form data state
    const initialState = id === undefined ? { id: uuid(), comments: [], title: "", description: "", body: "" }
        // * if id is available, load the data that has that id into the form,
        : blogs[id]
    //  * set the state for the forms
    const [formData, setFormData] = useState(initialState)


    const history = useHistory()
    function changeData(e) {
        e.persist()
        //  * leave as is
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }



    const dispatch = useDispatch()
    function submit(e) {
        e.preventDefault()
        //  * I need the setter function here so I can add the new blog to the list of blogs
        e.preventDefault()
        //  * set the state
        if (id === undefined) {
            //  todo : dispatch action instead ---> add_New_Blog
            dispatch({type:"ADD_NEW_POST", blog:formData})
            // setter(data => data = [...data, formData])
            // * leave the form data as is
            setFormData(initialState)
        }
        else {
            //  todo: dispatch actions instead ---> delete_Blog --->  add_New_Blog
            // * this editing a blog and it's not working right now
            // setter(data => data = data.filter(blog => blog.id !== id))
            dispatch({type:"DELETE_POST", id})
            // setter(data => data = [...data, formData])
            dispatch({type:"ADD_NEW_POST", blog:formData})
            history.push("/")
        }

    }


    return (
        <Container className="mt-4">
            <Row>
                <Col xs="8">
                    <Form>

                        <FormGroup>
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" name="title"  onChange={changeData} value={formData.title}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Descrition</Label>
                            <Input type="text" name="description" onChange={changeData} value={formData.description}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="body">Body</Label>
                            <Input type="textarea" name="body" rows={15} onChange={changeData} value={formData.body}></Input>
                        </FormGroup>

                        <Button onClick={submit}  className="m-1">Save</Button>
                        <Button onClick={()=> history.push("/")} color="danger">Cancel</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        )
}