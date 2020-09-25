import React from 'react'


import {Link} from 'react-router-dom'


//  * no need to do anything over here
export default function HomeNavigation() {

    return (
        <>
        <Link className="m-2" to="/">Blog</Link>
            <Link to="/new">Add a new Blog</Link>
        </>
    )
}
