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