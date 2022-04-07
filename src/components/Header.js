import React from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function Header() {
    const user = useSelector(state => state.userInfoState);
    return (
        <div>
            {/* <h2> Hello Man !! </h2> */}
            <h1> {user.name} </h1>
        </div>
    )
}
