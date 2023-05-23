import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const authContext = useAuth()

    const [username, SetUsername] = useState("")

    const [password, SetPassword] = useState("")

    const [successmessage, Setsuccessmessage] = useState(false)

    const [errormessage, Seterrormessage] = useState(false)

    const navigate = useNavigate();

    function Settingsuccessmessage(msg) {
        Setsuccessmessage(msg)
    }

    function Settingerrormessage(msg) {
        Seterrormessage(msg)
    }

    function SetplayerUsername(event) {
        SetUsername(event.target.value)
    }

    function SetplayerPassword(event) {
        SetPassword(event.target.value)
    }

    function displayCorrespondingMessage() {
        if (authContext.login(username, password)) {

            navigate(`/welcome/${username}`)
        }
        else {
            Settingsuccessmessage(false)
            Settingerrormessage(true)
        }
    }



    return (
        < div className="Login" >
            <h1>Please Login here</h1>
            {successmessage && <div className="successmessage" >welcome</div>}
            {errormessage && <div className="errormessage" >error</div>}
            <div className="username">
                <label> UserName</label>
                <input type="text" name="name" value={username} onChange={SetplayerUsername} />
            </div>

            <div className="password">
                <label> password</label>
                <input type="password" name="password" value={password} onChange={SetplayerPassword} />
            </div>

            <button type="button" name="login" onClick={displayCorrespondingMessage}>login</button>

        </div >

    )
}

export default LoginComponent