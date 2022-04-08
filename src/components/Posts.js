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

    //function to add new post 

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
        <div  className=' flex flex-col justify-center items-center;'>
            <h3  className=' flex flex-col justify-center items-center;'> Add New Post </h3>
            <div >
            <form class="w-full max-w-sm  " onSubmit={addPostHandler}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Title
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea   name="title" id="title"   as="textarea" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  placeholder='Title ...' type="text"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      Body
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea  name="body"  as="textarea" id="body" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>

  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    <input type='submit' value="Add" />
      
    </div>
  </div>
</form>
</div>
            <div>





                {/* <Form onSubmit={addPostHandler}>
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

 */}










                {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{myPost.body}</div>
                        <p class="text-gray-700 text-base">
                            {myPost.body}
                        </p>
                    </div> */}
                {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
                {/* </div> */}










            </div>
            <div class="grid grid-cols-3 gap-4 place-items-start  ..." >
                {
                    posts.map((myPost, idx) => {
                        return (
                            <div key={idx}>
                                {/* <h2>{myPost.title}</h2>
                            <p>{myPost.body}</p> */}
                                <div class="  max-w-sm rounded overflow-hidden shadow-lg ">

                                    <div class="px-6 py-4 " >
                                        <div class="font-bold text-xl mb-2">{myPost.title}</div>
                                        <p class="  flex flex-nowrap text-gray-700 text-base">
                                            {myPost.body}
                                        </p>
                                    </div>

                                    <ul>
                                        {
                                            myPost.comments.map((comm, index) => {
                                                return (
                                                    <li key={index}>
                                                        {/* <h3>{comm.name}</h3>
                                                <p>{comm.body}</p> */}





                                                        <div class="px-6 pt-4 pb-2">
                                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{comm.name}</span>
                                                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{comm.body}</span></div>
                                                    </li>

                                                )


                                            })

                                        }
                                    </ul>

                                    {
                                        myPost.userId == myInfos.id &&
                                        <>
                                            <button className='class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"' onClick={() => deletePost(myPost.id)}> Delete </button>
                                            <button className='class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"' onClick={() => showUpdateForm(myPost)}> Update </button>
                                        </>
                                    }

                                </div>


                            </div>
                        )

                    })


                }
            </div>
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
