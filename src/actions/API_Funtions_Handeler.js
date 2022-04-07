import axios from "axios";
const API="https://jsonplaceholder.typicode.com";


//function to get user from API and check if the user exist 
export const checkUser= async (data)=>{
    let users= await axios.get(`${API}/users`);
    let testUser=await users.data.find((ele)=>{
        if(ele.username==data.name && ele.email==data.email)
        {
            return ele
        }
    })
    return testUser
}
//function to retrive all posts from API
export const getPosts = async() => {
    let resPosts = await axios.get(`${API}/posts`);
    let resComments = await axios.get(`${API}/comments`);

    
    let posts = resPosts.data;
    let comments = resComments.data;

    // console.log("Posts -=> ",posts);
    // console.log("Comments -=> ",comments);
    
    for(let i=0;i<posts.length;i++){
        posts[i].comments = [];
        await comments.find(function(ele){
            if(ele.postId == posts[i].id)
            {
                posts[i].comments.push(ele)
            }
        })
    }
    // console.log("Posts -=> ",posts);
    // console.log("Comments -=> ",comments);

    return (posts);
}