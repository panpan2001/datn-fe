// import StudentSignUpForm from '../../components/StudentSignUpForm'
import SignUpLayout from '../../layouts/ChildrenLayouts/SignUpLayout'
import '../../assets/styles/SignUpPage.css'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm'
import '../../assets/styles/SignUpPage.css'
const SignUpPage = () => {

    return (

        <div className='sign-up-page_container container-fluid'>

            <div className="columns">
                <div className="column is-6">
                    <img className='signup_img' src={require('../../assets/images/18.jpg')} alt="" />
                </div>
                <div className="column is-6 ml-3 mr-3">
                    <SignUpForm/>
             
                </div>
            </div>
        </div>
    )
}

export default SignUpPage

{/* <div className="signup-choose">
                <label className="label signup_label is-size-4">
                    <strong>Bạn là: </strong>

                </label>
                <div class="control is-size-4 has-text-link " id="signup_control">
                    <Link to='/signup'> Học viên</Link>
                    <Link to='/signup/teacher'>Giáo viên</Link>
                    <Link to='/signup/admin'>Quản trị viên</Link>
                </div>
            </div> */}

{/* <Outlet img_singup_link={img_singup_link} signup_type_form={signup_type_form}/> */ }