import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/posts";
import * as functions_Handeler from "../actions/API_Funtions_Handeler"
import { Form, Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
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

     //use state to show model
     const [showUpdate, setShowUpdate] = useState(false);
     const [updatePost, setUpdatePost] = useState({});
    //showUpdate function 
    const showUpdateForm = (myPost) => {
        setShowUpdate(!showUpdate);
        setUpdatePost(myPost);
    }

    //update function 

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
                                    <button onClick={() => showUpdateForm(myPost)}> Update </button>
                                </>
                            }
                            
                        </div>



                    )

                })

            }
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
