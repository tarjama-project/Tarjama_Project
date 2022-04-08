import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function LeftBar(props) {
    return (
        
            <aside className=" w-64" aria-label="Sidebar">
                <div className=" overflow-y-auto py-4 px-3 bg-sky-800 rounded dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/profile" className="flex items-center no-underline p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">
                                    <Link className="text-slate-300 no-underline font-bold" to="/profile">
                                        Profile
                                    </Link>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/posts" className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    <Link className="text-slate-300 no-underline font-bold" to="/posts">
                                        Posts
                                    </Link>
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/users" className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    <Link className="text-slate-300 no-underline font-bold" to="/users">
                                        Users
                                    </Link>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    <Link className="text-slate-300 no-underline font-bold" to="/">
                                        Home
                                    </Link>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={props.logOutFunc} className="no-underline flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-rose-400 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    <Link className="no-underline text-rose-300 font-bold" to="/" > Log Out </Link>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </aside>
    )
}
