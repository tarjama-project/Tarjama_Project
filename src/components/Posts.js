import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/posts";
import * as functions_Handeler from "../actions/API_Funtions_Handeler"
export default function Posts() {

    const posts = useSelector(state => state.postsState);
    const myInfos = useSelector(state => state.userInfoState);
    const dispatch = useDispatch();


    useEffect(() => {
        async function fetchData() {
            if (posts.length === 0) {
                const posts_Data = await functions_Handeler.getPosts();
            
                dispatch(actions.getPosts(posts_Data));
            }

        }
        fetchData();
    }, [])


    //function delete posts 

    const deletePost = async (idx) => {
        // console.log(` posts before delete ${posts}`)
        let delpost = await functions_Handeler.deletePostFun(posts, idx);
        dispatch(actions.deletePosts(delpost))

    }
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
                                    myPost.comments.map((comm, index) => {
                                        return (
                                            <li key={index}>
                                                <h3>{comm.name}</h3>
                                                <p>{comm.body}</p>
                                            </li>

                                        )


                                    })

                                }
                            </ul>
                            {
                                myPost.userId == myInfos.id &&
                                <>
                                    <button onClick={() => deletePost(myPost.id)}> Delete </button>
                                    {/* <button onClick={() => showUpdateForm(myPost)}> Update </button> */}
                                </>
                            }
                            
                        </div>



                    )

                })

            }

        </div>
    )
}
