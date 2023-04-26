import StudentSignUpForm from '../../components/StudentSignUpForm'
import SignUpLayout from '../../layouts/SignUpLayout'
import '../../assets/styles/SignUpPage.css'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
const SignUpPage = ({img_singup_link,signup_type_form}) => {

    return (

        <div className='sign-up-page_container container-fluid'>
            <div className="signup-choose">
                <label className="label signup_label is-size-4">
                    <strong>Bạn là: </strong>

                </label>
                <div class="control is-size-4 has-text-link " id="signup_control">
                    <Link to='/signup'> Học viên</Link>
                    <Link to='/signup/teacher'>Giáo viên</Link>
                    <Link to='/signup/admin'>Quản trị viên</Link>
                </div>
            </div>

            {/* <GenderRadioButton/> */}
            {/* student sign up  */}
            {/* <SignUpLayout img_singup_link={img_singup_link} signup_type_form={signup_type_form} /> */}
            <Outlet img_singup_link={img_singup_link} signup_type_form={signup_type_form}/>
        </div>
    )
}

export default SignUpPage