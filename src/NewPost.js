
//  * should show a form and two buttons, one to submit the form, the other  to cancel/redirects to home

import React, {useState} from 'react'
import {
    Container, Row, Col,
    Form, Input, Label, Button, FormGroup
} from 'reactstrap'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {makePostOnApi, updatePostOnApi} from './actionCreators'





export default function NewPost() {


    const { id } = useParams()
    const blogs = useSelector(st => st)

    const initialState = id === undefined ? { title: "", description: "", body: "" }
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

        //  *  ADDING A NEW POST
        if (id === undefined) {
            console.log(formData)
            dispatch(makePostOnApi(formData))
            setFormData(initialState)
        }
        //  * EDITING AN EXISTING POST
        else {
            dispatch(updatePostOnApi(formData))

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