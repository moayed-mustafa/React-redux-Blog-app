
import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

import HomePage from './Homepage'

import NewPost from './NewPost'
import PostView from './PostView'
import {getPostsFromApi} from './actionCreators'
// import BlogsContext from './BlogsContext'
export default function Routes() {

    //  todo: get blogs from the api overhere



    // const blogs = useSelector(st => st)
    let blogs = getPostsFromApi()
    console.log(blogs)
    return (
        <div>

            <Switch>

                <Route exact path="/">
                    {/*  add this back to HomePage component blogs={blogs} */}
                    <HomePage blogs={blogs} />
                </Route>
                <Route exact path="/new">
                    <NewPost />
                </Route>

                <Route exact path="/new/:id">
                    <NewPost />
                </Route>
                <Route exact path="/:id">
                    <PostView blogs={blogs}/>
                </Route>

            </Switch>
        </div>
    )


}