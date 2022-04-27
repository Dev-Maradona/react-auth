import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { HomePage, LoginPage, RegisterPage, AuthPage } from './pages';


function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/auth' element={<AuthPage />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App