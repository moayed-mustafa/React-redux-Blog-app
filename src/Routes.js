
import React from 'react'
import { Switch, Route } from 'react-router-dom'


import HomePage from './Homepage'

import NewPost from './NewPost'
import PostView from './PostView'
export default function Routes() {


    return (
        <div>

            <Switch>

                <Route exact path="/">
                    {/*  add this back to HomePage component blogs={blogs} */}
                    <HomePage  />
                </Route>
                <Route exact path="/new">
                    <NewPost />
                </Route>

                <Route exact path="/new/:id">
                    <NewPost />
                </Route>
                <Route exact path="/:id">
                    <PostView />
                </Route>

            </Switch>
        </div>
    )


}