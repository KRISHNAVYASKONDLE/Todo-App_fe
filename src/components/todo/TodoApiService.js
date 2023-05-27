import axios from "axios"


const apiclient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const todoapiservicelink=(uname)=>apiclient.get(`/users/${uname}`)
export const deleteapiservicelink=(username,id)=>apiclient.delete(`/users/${username}/todos/${id}`)
export const updatetodoapiservicelink=(username,id)=>apiclient.get(`users/${username}/todos/${id}`)
export const updateapilink=(username,id,todo)=>apiclient.put(`/users/${username}/todos/${id}`,todo)
export const createapilink=(username,todo)=>apiclient.post(`/users/${username}/todos`,todo)