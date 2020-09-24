
//  * should show a jumbotron with a welcoming message a title and a two navigation buttons
import React from 'react'
import { Container, Row, Col, } from 'reactstrap';
import PostsList from './PostsList'
import Welcome from './Welcome'

/*
 * initiate the state here
 * pass the blogs down as a prop to PostList
 * Make a context out of the blogs and the setter function as well
 * unpack it on Routes Page
 * Pass it to the form

 */

export default function HomePage({blogs}) {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <Welcome/>
                    </Col>
                </Row>
                <Row>
                    <PostsList blogs={blogs} />
                </Row>


        </Container>

            </>
  );

}


