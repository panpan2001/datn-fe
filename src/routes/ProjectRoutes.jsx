import React, {  lazy } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherSignUpForm from "../components/TeacherSignUpForm";
import AdminSignUpForm from "../components/AdminSignUpForm";
import StudentSignUpForm from "../components/StudentSignUpForm";

const LandingPage= React.lazy(() => import('../pages/LandingPage'));
const LoginPage= React.lazy(() => import('../pages/LoginPage'));
const NotFound= React.lazy(() => import('../pages/NotFound'));
const SignUpPage= React.lazy(() => import('../pages/SignUpPage'));
const SignUpLayout= React.lazy(() => import('../layouts/signUpLayout'));

const ProjectRoute = () => {
    return (
                <BrowserRouter>
                    <Routes>
                        {/* <Route index element={<LandingPage />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/login" element={<LoginPage />} /> */}
                        <Route path="/signup" element={<SignUpPage/>}>
                            <Route index element={<SignUpLayout img_singup_link={require('../assets/images/1.jpg')} signup_type_form={<StudentSignUpForm />} />} />
                            <Route path="/signup/teacher" element={<SignUpLayout img_singup_link={require('../assets/images/12.jpg')} signup_type_form={<TeacherSignUpForm />} />} />
                            <Route path="/signup/admin" element={<SignUpLayout img_singup_link={require('../assets/images/18.jpg')} signup_type_form={<AdminSignUpForm />} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
    )
}

export default ProjectRoute