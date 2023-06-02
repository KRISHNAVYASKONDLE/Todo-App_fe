import { apiclient } from "./ApiClient"

export const executebasicauth=(token)=>apiclient.get(`/basicauth`)

export const executebasicjwtauth=(username,password)=>apiclient.post(`/authenticate`,{username,password})



