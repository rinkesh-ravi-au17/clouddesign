import axios from "axios"


// const url = "http://localhost:3003/todo"

export const addtodo = async(todo)=>{
    return await axios.post(url,todo)
}

// export const edittodo = async(id,todo) =>{
//     return await axios.put(`${url}/${id}`, todo)
// }
