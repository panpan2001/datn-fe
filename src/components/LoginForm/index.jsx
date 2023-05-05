import '../../assets/styles/LoginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginUser from '../../redux/actions/Auth/LoginRequest'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from "yup"
const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formilk = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email chưa đúng định dạng !")
                .required("Bạn chưa điền vào trường này!")
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email chưa đúng định dạng !"),
            password: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(6, "Tối thiểu 6 kí tự."),
        })
        ,
        onSubmit: (values) => {
            console.log("login successfully")
            loginUser(values, dispatch, navigate)
        }

    })
    return (
        <form className="login-form_container" onSubmit={formilk.handleSubmit}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Đăng nhập </strong>
            </label>
            <div className="field">
                <label className="label">Email</label>
                <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name='email'
                    id='email'
                    value={formilk.values.email}
                    onChange={formilk.handleChange} />
                {formilk.errors.email && <p className="help is-danger">{formilk.errors.email}</p>}
            </div>
            <div className="field">
                <label className="label">Mật khẩu</label>
                <input
                    className="input"
                    type="password "
                    placeholder="Mật khẩu"
                    name='password'
                    id='password'
                    value={formilk.values.password}
                    onChange={formilk.handleChange} />
                {formilk.errors.password && <p className="help is-danger">{formilk.errors.password}</p>}
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đăng nhập </button>
            </div>
            <label className="label sign-up_label ">
                <Link className=" is-size-6 mt-2 " to='/forgotPassword'>Quên mật khẩu?</Link>
            </label>
            <br />
            <label className="label sign-up_label ">
                <p className=" is-size-6 ">Chưa có tài khoản?   </p>
                <Link className=" is-size-6 " to="/signup">  Đăng kí ngay</Link>
            </label>

        </form>
    )
}

export default LoginForm