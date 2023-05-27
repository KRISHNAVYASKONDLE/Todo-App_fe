import { useEffect, useState } from "react"
import { useAuth } from "./todo/security/AuthContext"
import { updatetodoapiservicelink, updateapilink, createapilink } from "./todo/TodoApiService"
import { useParams } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import moment from "moment"
export default function UpdateTodoComponent() {

    const { id } = useParams()
    const authcontext = useAuth()
    const username = authcontext.username
    // const [todo, setTodo] = useState(null)
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const navigate = useNavigate()

    useEffect(() => gettodo(), [id])


    function gettodo() {
        if (id !== -1) {
            updatetodoapiservicelink(username, id).then(response => {
                response.log("response of get id data ia" + response)
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            }).catch(error => console.log(error))
        }
    }

    function onSubmit(values) {

        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        if (id === -1) {
            createapilink(username, todo).then(response => {
                console.log(response)
                navigate(`/ListTodosComponent`)
            }).catch(error => console.log(error))
        }
        else {
            updateapilink(username, id, todo).then(response => {
                console.log(response)
                navigate(`/ListTodosComponent`)
            }).catch(error => console.log(error))
        }

    }

    function validate(values) {
        let errors = {}

        if (values.description.length < 5) {
            errors.description = 'minimum length is 5 for description'
        }
        if (values.targetDate === null || values.targetDate === '' || !moment(values.targetDate).isValid) {
            errors.description = 'date field cant be empty'
        }
        return errors
    }
    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{ description, targetDate }} enableReinitialize={true} onSubmit={onSubmit} validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}

                >
                    {(props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning" />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset>
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description" />
                            </fieldset>
                            <fieldset>
                                <label>Date</label>
                                <Field className="form-control" type="date" name="targetDate" />
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit" >save</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )

}

