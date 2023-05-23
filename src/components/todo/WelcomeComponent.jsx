import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { helloworldparamapilink, todogetlistlink } from "./api/HelloworldApiService"


function WelcomeComponent() {

    const [message, setMessage] = useState(null)
    const params = useParams()


    function successMessage(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorMessage(error) {
        console.log(error)
    }

    function submitwelcome() {
        todogetlistlink(params.username).then((response) => successMessage(response))
            .catch((error) => errorMessage(error))
            .finally(() => console.log('cleanup'))
    }

    return (
        <div>
            <h1>Welcome Back</h1>
            Welcome {params.username}
            <div>

                <Link to="/ListTodosComponent">gotoTodo</Link>

            </div>
            <div>
                <button className="btn btn-success m-3" onClick={submitwelcome}>submit</button>
            </div>
            <div className="text-info">{

                message && message.map((object) => (
                    <p key={object.id}>{object.description}</p>
                ))}
            </div>
        </div>
    )
}

export default WelcomeComponent