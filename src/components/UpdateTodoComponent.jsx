import { useEffect, useState } from "react"
import { useAuth } from "./todo/security/AuthContext"
import { updatetodoapiservicelink } from "./todo/TodoApiService"
import { useParams } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"

export default function UpdateTodoComponent() {

    const { id } = useParams()
    const authcontext = useAuth()
    const username = authcontext.username
    const [todo, setTodo] = useState(null)
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    useEffect(() => gettodo(), [id])


    function gettodo() {
        updatetodoapiservicelink(username, id).then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        }).catch(error => console.log(error))
    }

    function onSubmit(values) {
        console.log(values)
    }

    function validate(values) {
        let errors = {}

        if (values.description.length < 5) {
            errors.description = 'minimum length is 5 for description'
        }
        if (values.targetDate == null || values.targetDate <= new Date()) {
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

