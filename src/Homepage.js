
//  * should show a jumbotron with a welcoming message a title and a two navigation buttons
import React from 'react'
import { Container, Row, Col, } from 'reactstrap';
import PostsList from './PostsList'
import Welcome from './Welcome'


export default function HomePage() {
    //  todo the blogs prop is going to be removed from here and not passed down to the PostList component

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
                    <PostsList  />
                </Row>


        </Container>

            </>
  );

}


