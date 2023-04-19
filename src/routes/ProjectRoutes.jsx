import React, {  lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LandingPage= React.lazy(() => import('../pages/LandingPage'));
const LoginPage= React.lazy(() => import('../pages/LoginPage'));
const NotFound= React.lazy(() => import('../pages/NotFound'));

const ProjectRoute = () => {
    return (
                <BrowserRouter>
                    <Routes>
                        <Route index element={<LandingPage />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </BrowserRouter>
    )
}

export default ProjectRoute