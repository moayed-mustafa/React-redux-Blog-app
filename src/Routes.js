
import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './Homepage'

import NewPost from './NewPost'
import PostView from './PostView'
import BlogsContext from './BlogsContext'
export default function Routes() {


    const {blogs, setBlogs} = useContext(BlogsContext)

    return (
        <div>

            <Switch>

                <Route exact path="/">
                    <HomePage blogs={blogs}/>
                </Route>
                <Route exact path="/new">
                    <NewPost setter={setBlogs}/>
                </Route>
                <Route exact path="/new/:id">
                    <NewPost blogs={blogs}setter={setBlogs}/>
                </Route>
                <Route exact path="/:id">
                    <PostView blogs={blogs}/>
                </Route>

            </Switch>
        </div>
    )


}