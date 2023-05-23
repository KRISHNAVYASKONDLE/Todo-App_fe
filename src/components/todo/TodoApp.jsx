// import { useState } from "react"
import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import WelcomeComponent from "./WelcomeComponent"
import ErrorComponent from "./ErrorComponent"
import HeaderComponent from "./HeaderComponent"
import LogoutComponent from "./LogoutComponent"
import ListTodosComponent from "./ListTodosComponent"
import FooterComponent from "./FooterComponent"
import AuthProvider, { useAuth } from './security/AuthContext'
import UpdateTodoComponent from '../UpdateTodoComponent'

function AuthenticatedRoute({ children }) {

    const authContext = useAuth()
    if (authContext.isAuthenticated) {
        // console.log("hi")
        return children
    }
    console.log("for navigating")
    return <Navigate to="/" />

}

export default function TodoApp() {

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/Login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/updatetodo/:id' element={
                            <AuthenticatedRoute>
                                <UpdateTodoComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/Logout' element={<LogoutComponent />} />
                        <Route path='/ListTodosComponent' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )

}








