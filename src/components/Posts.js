import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/posts";
import * as functions_Handeler from "../actions/API_Funtions_Handeler"
import { Form, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import Swal from 'sweetalert2';



export default function Posts() {

    const posts = useSelector(state => state.postsState);
    console.log("posttt",posts)
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
        }).then(async(result) => {
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
                <h3> Add New Post </h3>

                <Form onSubmit={addPostHandler}>
                    <FormGroup>
                        <Form.Label>Title: </Form.Label>
                        <Form.Control as="textarea" placeholder='Title ...' name="title" type="text" />
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Body: </Form.Label>
                        <Form.Control as="textarea" placeholder='Post Body ...' name="body" type="text" />
                    </FormGroup>

                    <Button type="submit" variant="primary">
                        Add
                    </Button>
                </Form>
            </div>
            <div class="grid grid-cols-3 gap-4 place-items-start  ..." >
            {
                    posts.map((myPost, idx) => {
                        console.log(myPost)
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
