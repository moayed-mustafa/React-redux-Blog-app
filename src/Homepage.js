
//  * should show a jumbotron with a welcoming message a title and a two navigation buttons
import React from 'react'
import { Container, Row, Col, } from 'reactstrap';
import PostsList from './PostsList'
import Welcome from './Welcome'

//  todo: keep the props
// todo: add prop {blogs} to homepage, it will be passed down to PostList

export default function HomePage({blogs}) {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <Welcome/>
                    </Col>
                </Row>
                {/* todo: add this later once you figure out the dispatch action */}
                <Row>
                    <PostsList blogs={blogs} />
                </Row>


        </Container>

            </>
  );

}


