import { createContext, useContext, useState } from "react";
import { apiclient } from "../api/ApiClient";
import { executebasicauth } from "../api/HelloworldApiService";
import { ErrorMessage } from "formik";
export const Authcontext=createContext()

export const useAuth= ()=> useContext(Authcontext)

// const authContext = useContext(Authcontext)




export default function AuthProvider({children})
{
    const [username,setUsername]=useState(null);
    const [isAuthenticated,setAuthenticated]=useState(false)
    const [token,setToken]=useState(null)

    async function login(username, password)
    {
        const baToken='Basic '+  window.btoa(username+':'+password)

        try{  
                const response= await executebasicauth(baToken)

                if(response.status==200)   
                {       
                    console.log(response)
                    setAuthenticated(true)
                    setUsername(username)            
                    setToken(baToken)
                    console.log(baToken)
                    apiclient.interceptors.request.use( 
                        config => {
                        console.log('hey enternig header')
                        config.headers["Authorization"] = baToken;
                        return config;
                      },
                      error=>{
                        return Promise.reject(error)
                      }
                      );
                    return true
                }          
                else{
                    console.log('not suces')
                    logout()
                    return false
                }  
                
           } catch(error)
           {
            console.log('wrong token')
            logout()
            return false
           }           
            
    }   
    function logout()
    {
        setToken(null)
        setUsername(null)
        setAuthenticated(false)
    }

    // const [number,setNumber]=useState(10)
    return(
        <Authcontext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}
        </Authcontext.Provider>
    )    

}
