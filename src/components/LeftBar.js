import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function LeftBar() {
    return (
        <div>
            <Link to="/profile">
                Profile
            </Link>
            <Link to="/posts">
                Posts
            </Link>
            <Link to="/users">
                Users
            </Link>
         

            <Outlet />
        </div>
    )
}