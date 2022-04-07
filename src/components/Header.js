import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function Header() {
    const user = useSelector(state => state.userInfoState);
    return (
        <div>
            {/* <h2> Hello Man !! </h2> */}
            <Link to="/profile">
            <h1> {user.name} </h1>
            </Link>
        </div>
    )
}