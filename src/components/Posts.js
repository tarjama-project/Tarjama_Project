import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/posts";
import * as functions_Handeler from "../actions/API_Funtions_Handeler"
import { Form, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import Swal from 'sweetalert2';



export default function Posts() {

    const posts = useSelector(state => state.postsState);
    const myInfos = useSelector(state => state.userInfoState);
    const dispatch = useDispatch();


    const deletePost = async (idx) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {

                let newPosts = await functions_Handeler.deletePostFun(posts, idx);
                dispatch(actions.deletePosts(newPosts));

                Swal.fire(
                    'Deleted!',
                    'Your post has been deleted.',
                    'success'
                )
            }
        })


    }

    const [showUpdate, setShowUpdate] = useState(false);
    const [updatePost, setUpdatePost] = useState({});

    const showUpdateForm = (myPost) => {
        setShowUpdate(!showUpdate);
        setUpdatePost(myPost);
    }

    const updatePostFun = async (e) => {
        e.preventDefault();
        let newPost = {
            userId: myInfos.id,
            id: updatePost.id,
            title: e.target.title.value,
            body: e.target.body.value,
            comments: updatePost.comments
        }

        console.log("New Post ==> ", newPost);
        // here we will use the dispatch to update the data
        let testArr = await functions_Handeler.updatePostFun(newPost, posts);
        dispatch(actions.updatePosts(testArr));
        showUpdateForm();
    }

    const addPostHandler = async (e) => {
        e.preventDefault();
        let newPost = {
            userId: myInfos.id,
            id: posts.length + 1,
            title: e.target.title.value,
            body: e.target.body.value,
            comments: []
        }
        console.log("New Post ==> ", newPost);
        // here we will use the dispatch to update the data
        // let testArr = await functions_Handeler.addPostFun(newPost, posts);
        dispatch(actions.addPosts(newPost));
    }

    return (
        <div>
            <h1 className="text-center">Posts</h1>

            <div>

                <div class="m-auto w-full max-w-xs">
                <h3> Add New Post </h3>
                <form onSubmit={addPostHandler} class="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Title:
                        </label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required  placeholder='Title ...' name="title" type="text" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Body:
                        </label>
                        <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required placeholder='Post Body ...' name="body" type="text" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add
                        </button>

                    </div>
                </form>

            </div>

                
            </div>
            <div class="grid grid-cols-3 gap-4 place-items-start  ..." >
                {
                    posts.length == 0 &&
                    <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-40 ">
                        <img className="w-2/4 m-auto " alt="loading" src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" />
                    </div>
                }
                {
                    posts.map((myPost, idx) => {
                        return (
                            <div key={idx}>
                                {/* <h2>{myPost.title}</h2>
                            <p>{myPost.body}</p> */}
                                <div class=" w-100  max-w-sm rounded overflow-hidden shadow-lg ">

                                    <div class="px-3 py-2 " >
                                        <div class="font-bold text-xl mb-2">{myPost.title}</div>
                                        <p class="  flex flex-nowrap text-gray-700 text-base">
                                            {myPost.body}
                                        </p>
                                    </div>

                                    <ul className="px-3">
                                    <p className="bg-gray-300"> Comments: </p>
                                        {
                                            myPost.comments.map((comm, index) => {
                                                return (
                                                    <li key={index}>
                                                        {/* <h3>{comm.name}</h3>
                                                <p>{comm.body}</p> */}





                                                        <div class="border-b-2 border-blue-600 bg-gray-200  px-3 pt-4 pb-2">
                                                            <span class="font-black inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{comm.name}</span>
                                                            <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{comm.body}</span></div>
                                                    </li>

                                                )


                                            })

                                        }
                                    </ul>

                                    {
                                        myPost.userId == myInfos.id &&
                                        <>
                                            <button className='class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-100"' onClick={() => deletePost(myPost.id)}> Delete </button>
                                            <button className='class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"' onClick={() => showUpdateForm(myPost)}> Update </button>
                                        </>
                                    }

                                </div>


                            </div>
                        )

                    })


                }
            </div>
            {/* {
                posts.map((myPost, idx) => {
                    return (
                        <div key={idx}>
                            {
                                myPost.userId == myInfos.id &&
                                <>
                                    <button onClick={() => deletePost(myPost.id)}> Delete </button>
                                    <button onClick={() => showUpdateForm(myPost)}> Update </button>
                                </>
                            }
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
                        </div>
                    )
                })
            } */}
            <Modal show={showUpdate} onHide={showUpdateForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <Form onSubmit={updatePostFun}>
                    <Modal.Body>
                        {/* personal */}
                        <FormGroup>
                            <Form.Label>Title: </Form.Label>
                            <Form.Control as="textarea" defaultValue={updatePost?.title} name="title" type="text" />
                        </FormGroup>

                        <FormGroup>
                            <Form.Label>Body: </Form.Label>
                            <Form.Control as="textarea" defaultValue={updatePost?.body} name="body" type="text" />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>


            </Modal>
        </div>
    )
}