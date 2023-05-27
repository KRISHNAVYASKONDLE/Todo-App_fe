import { createContext, useContext, useState } from "react";

import { executebasicauth } from "../api/HelloworldApiService";
export const Authcontext=createContext()

export const useAuth= ()=> useContext(Authcontext)

// const authContext = useContext(Authcontext)




export default function AuthProvider({children})
{
    const [username,setUsername]=useState(null);
    const [isAuthenticated,setAuthenticated]=useState(false)


    function login(username, password)
    {
        const baToken='Basic '+  window.btoa(username+':'+password)

        executebasicauth(baToken).then(response=>
            console.log(response),
        setAuthenticated(true))
        .catch(error=>console.error())
            return true
        // if (username == 'as' && password === 'asdf') {
        //     setAuthenticated(true)
        //     setUsername(username)
        //     return true
        // }
        // else {
        //     setAuthenticated(false)
        //     return false
        // }
    }   
    function logout()
    {
        setUsername(null)
        setAuthenticated(false)
    }

    // const [number,setNumber]=useState(10)
    return(
        <Authcontext.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </Authcontext.Provider>
    )    

}
