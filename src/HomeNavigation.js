import React from 'react'


import {Link} from 'react-router-dom'


export default function HomeNavigation() {

    return (
        <>
        <Link className="m-2" to="/">Blog</Link>
            <Link to="/new">Add a new Blog</Link>
            </>
    )
}
