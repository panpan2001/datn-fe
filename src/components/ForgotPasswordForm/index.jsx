import '../../assets/styles/ForgotPasswordForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginUser from '../../redux/actions/Auth/LoginRequest'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from "yup"
const ForgotPasswordForm = () => {
    const navigate = useNavigate()
    const formilk = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(6, "Tối thiểu 6 kí tự."),
            confirmPassword: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp!")
        })
        ,
        onSubmit: (values) => {
            console.log("reset pasword successfully ", values)
            navigate('/login')
        }

    })


    return (
        <form className="login-form_container" onSubmit={formilk.handleSubmit}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Quên mật khẩu </strong>
            </label>
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
            <div className="field">
                <label className="label">Nhắc lại mật khẩu</label>
                <input
                    className="input"
                    type="password "
                    placeholder="Nhắc lại mật khẩu"
                    name='confirmPassword'
                    id='confirmPassword'
                    value={formilk.values.confirmPassword}
                    onChange={formilk.handleChange} />
                    {formilk.errors.confirmPassword && <p className="help is-danger">{formilk.errors.confirmPassword}</p>}
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đặt lại</button>
            </div>

        </form>
    )
}

export default ForgotPasswordForm