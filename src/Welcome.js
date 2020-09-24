import React from 'react'
import { Jumbotron} from 'reactstrap';
import HomeNavigation from './HomeNavigation'



export default function Welcome(){


    return (
        <Jumbotron>
                    <h1 className="display-3">Moayed's MicroBlog</h1>
                    <p className="lead">Welcome To Moayed's Blogging site</p>
                    <hr className="my-2" />
                    <small>Commited to freedom of speech, just don't speech stuff I don't like</small>
                    <br></br>
                    <HomeNavigation/>
        </Jumbotron>

    )
}