import axios from "axios"


const apiclient=axios.create(
        {baseURL:'http://localhost:8080'}
)

export const helloworldapilink=()=>apiclient.get('/hello-world-bean')
export const helloworldparamapilink=(name)=>apiclient.get(`/hello-world/path-variable/${name}`)

export const todogetlistlink=(uname)=>apiclient.get(`/users/${uname}`)
        
