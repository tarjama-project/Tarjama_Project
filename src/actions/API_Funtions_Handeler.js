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

//function handeler to delete post 
 export const deletePostFun =async(arrPost,idx )=>{
    console.log(arrPost,'🙌👍😁')
     let arr=arrPost.filter((value,idnx)=>{
         return idx !==value.id 
     })
     console.log("posts",arr );
     
     return arr

 }

 
// function Update post   

export const updatePostFun = ( udpatedPost,arrPost) => {
    // console.log("udpatedPost", udpatedPost);
    // console.log("arrPost", arrPost);
    let result = [];

    for(let i=0;i<arrPost.length;i++){
        if(arrPost[i].id == udpatedPost.id){
            result.push(udpatedPost)
        }else{
            result.push(arrPost[i])
        }
    }
    // console.log("posts", result);
    return result
}
//function to get all albums
export const allAlbums = async() => {
    let albums = await axios.get(`${API}/albums`);
    return albums.data;
}
export const allUsers = async()=>{
    let users = await axios.get(`${API}/users`);
    
    return users.data;
}
export const updateUsers = async(person, users)=>{
    let resultArr = [];
    for(let i=0;i<users.length;i++){
        if(users[i].id == person.id){
            resultArr.push(person)
        }else{
            resultArr.push(users[i])
        }
    }

    return resultArr;
}