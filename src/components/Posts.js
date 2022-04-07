import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/posts";
import * as functions_Handeler from "../actions/API_Funtions_Handeler"
export default function Posts() {

    const posts = useSelector(state => state.postsState);
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchData() {
            if (posts.length === 0) {
                const posts_Data = await functions_Handeler.getPosts();
                // const myUesr = await functions_Handeler.getUsers();
                // console.log(posts_Data);
                dispatch(actions.getPosts(posts_Data));
            }

        }
        fetchData();
    }, [])

    return (
        <div>
                {
                    posts.map((myPost, idx) => {
                        return (
                            <div key={idx}>
                                <h2>{myPost.title}</h2>
                                <p>{myPost.body}</p>
                                <ul>
                                    {
                                        myPost.comments.map((comm,index)=>{
                                            return(
                                                <li key={index}>
                                                    <h3>{comm.name}</h3>
                                                    <p>{comm.body}</p>
                                                </li>

                                            )
                                           

                                        })
                                       
                                    }
                                </ul>
                                {/* <button onClick={()=>functions_Handeler.deleteFun(posts,idx)}>delete</button>
                                <button onClick={()=>functions_Handeler.showUpdateFun(posts,idx)} > update </button> */}
                            </div>
                            
                         
                          
                        )
                        
                    })
                   
                }
               
        </div>
    )
}
