import { useEffect, useState } from "react"
import { todoapiservicelink, deleteapiservicelink } from "./TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"
export default function ListTodosComponent() {

    // const today = new Date()

    // const targetdate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    const authcontext = useAuth()
    const [todos, setTodos] = useState([])
    const username = authcontext.username
    const navigate = useNavigate()

    useEffect(() => refreshtodos(), [])

    function refreshtodos() {

        todoapiservicelink(username).then(response => {
            setTodos(response.data)
        })
            .catch(error => console.log(error))
    }

    function deleteapicall(id) {
        deleteapiservicelink(username, id)
            .then(() => {
                console.log('heresif')
                refreshtodos()
            })
            .catch(error => console.log(error))
    }

    function navigatetodopage(id) {
        navigate(`/updatetodo/${id}`)
    }
    return (
        <div className="container">
            <h1>Things you wanna do </h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>descripton</th>
                            <th>is done ?</th>
                            <th>Target Date</th>
                            <th>Modify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => {
                                    return (
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td> <button className="btn btn-warning" onClick={() => navigatetodopage(todo.id)} >Modify</button></td>
                                            <td> <button className="btn btn-danger" onClick={() => deleteapicall(todo.id)} >Delete</button></td>
                                        </tr>
                                    )
                                }

                            )


                        }
                    </tbody>
                </table>
                <div className="btn btn-primary m-3 center" onClick={() => navigatetodopage(-1)}>Add todo</div>
            </div>

        </div>
    )

}