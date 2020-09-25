
import React, {useContext} from 'react'
import { Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

import HomePage from './Homepage'

import NewPost from './NewPost'
import PostView from './PostView'
// import BlogsContext from './BlogsContext'
export default function Routes() {

    // todo: remove context hook, keep the props  on homepage,
    // todo: remove it from NewPost, add prop setBlogs to PostView

    // const { blogs, setBlogs } = useContext(BlogsContext)

    const blogs = useSelector(st => st)
    // console.log(blogs)
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