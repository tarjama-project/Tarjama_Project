import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function Header() {
    const user = useSelector(state => state.userInfoState);
    return (
        <div className="py-2.5 bg-sky-900 leading-5 text-center ">
            {/* <h2> Hello Man !! </h2> */}
            <Link className="leading-5 text-slate-300 no-underline" to="/profile">
            <span className="text-5xl font-bold py-2.5"> {user.name} </span>
            </Link>
        </div>
    )
}
