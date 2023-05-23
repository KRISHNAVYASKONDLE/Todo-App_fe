import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function HeaderComponent() {

    const authContext = useAuth()
    const username = authContext.username

    const isAuthenticated = authContext.isAuthenticated

    console.log(authContext)

    function logout() {
        authContext.logout()
    }

    // console.log(`Header Component - ${authContext} `);

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="http://www.abc.com">abcweb</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">{isAuthenticated && <Link className="nav-link" to={`/welcome/${username}`}>Home</Link>}</li>
                                <li className="nav-item fs-5">{isAuthenticated && <Link className="nav-link" to="/ListTodosComponent">Todo</Link>}</li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">{isAuthenticated && <Link className="nav-link" to="/Logout" onClick={logout} >Logout</Link>}</li>
                            <li className="nav-item fs-5">{!isAuthenticated && <Link className="nav-link" to="/Login">Login</Link>}</li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header >
    )

}
export default HeaderComponent