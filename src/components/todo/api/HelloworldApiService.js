import { apiclient } from "./ApiClient"
export const helloworldapilink=()=>apiclient.get('/hello-world-bean')
export const helloworldparamapilink=(name)=>apiclient.get(`/hello-world/path-variable/${name}`)

export const todogetlistlink=(uname)=>apiclient.get(`/users/${uname}`)

// export const executebasicauth=(token)=>apiclient.get(`/basicauth`)
        
