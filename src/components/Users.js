import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/allAlbums";
import * as actions2 from "../actions/signIn";
import * as function_Handlers from "../actions/API_Funtions_Handeler";

export default function Users() {


    const myInfos = useSelector(state => state.userInfoState);

    const allUsers = useSelector(state => state.getAllUsers);
    const posts = useSelector(state => state.postsState);
    const allAlbums = useSelector(state => state.allAlbums);
    const dispatch = useDispatch();


    const [usersMap, setUsersMap] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if (allAlbums.length === 0) {
                let allAlbums = await function_Handlers.allAlbums();
                dispatch(actions.allAlbums(allAlbums));
            }
            if (allUsers.length === 0) {
                let allUsers = await function_Handlers.allUsers();
                dispatch(actions2.allUsers(allUsers));
            }


            let mapArr = [];
            let userToRender = {};
            for (let i = 0; i < allUsers.length; i++) {
                let userAlbums = 0;
                allAlbums.find(function (ele) {
                    if (ele.userId === allUsers[i].id) {
                        userAlbums += 1;
                    }
                })
                let userPosts = 0;
                posts.find(function (ele) {
                    if (ele.userId === allUsers[i].id) {
                        userPosts += 1;
                    }
                })
                console.log("userPosts ==> ", userPosts);
                userToRender = {
                    name: allUsers[i].name,
                    email: allUsers[i].email,
                    phone: allUsers[i].phone,
                    albums: userAlbums,
                    posts: userPosts
                }
                mapArr.push(userToRender);
            }
            console.log("mapArr ==> ", mapArr);
            setUsersMap(mapArr);
        }
        fetchData();
    }, [])
    
    return (
        <div>
            <h1>Users</h1>

            <ul>
            {
                usersMap.map((user,idx)=>{
                    return(
                        <li key={idx}>
                            <h3><b>Name:</b> {user.name}</h3>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                            <p><b>Albums.No:</b> {user.albums}</p>
                            <p><b>Posts.No:</b> {user.posts}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )


}