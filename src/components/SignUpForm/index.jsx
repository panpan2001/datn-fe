import { Link, useNavigate } from "react-router-dom"
import '../../assets/styles/SignUpForm .css'
import { useState } from "react"
import registerUser from "../../redux/actions/Auth/RegisterRequest"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let currentDate = new Date().toJSON().slice(0, 10);

    const formik = useFormik({
        initialValues: {
            role_name: '',
            full_name: '',
            date_of_birth: '',
            gender: '',
            address: '',
            email: '',
            phone_number: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            role_name: Yup.string()
                .required("Bạn chưa chọn đối tượng đăng kí!"),
            full_name: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(3, "Tối thiểu 3 kí tự.")
                .max(50, "Tối đa 50 kí tự."),
            date_of_birth: Yup.string()
                .required("Bạn chưa điền vào trường này!"),
            gender: Yup.string()
                .required("Bạn chưa chọn giới tính!"),
            address: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(3, "Tối thiểu 3 kí tự."),
            email: Yup.string()
                .email( "Email chưa đúng định dạng !")
                .required("Bạn chưa điền vào trường này!")
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,  "Email chưa đúng định dạng !"),
            phone_number: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(10, "Tối thiểu 10 kí tự.")
                .max(20, "Tối đa 10 kí tự.")
                .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Sai định dạng !"),
            password: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .min(6, "Tối thiểu 6 kí tự."),
            confirmPassword: Yup.string()
                .required("Bạn chưa điền vào trường này!")
                .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp!")
        }),
        onSubmit: (values) => {
            console.log("newUser");
            // e.preventDefault(e)
            console.table(values)
            registerUser(values, dispatch, navigate)
        }
    })
    console.log("error: ", formik.errors)

    return (
        <form className='admin-signup-form_container container-fluid mr-6' onSubmit={formik.handleSubmit}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Đăng kí với vai trò là: </strong>
                <div className="column is-12 role-signup_column">
                    <div className="field role-signup_field">
                        <div className="control role-signup_control" id="role-signup_control">
                            <div id="role-1">
                                <input
                                    type="radio"
                                    name="role_name"
                                    id="student"
                                    value={'student'}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-5 " >Học viên</label>
                            </div>
                            <div id="role-2">
                                <input
                                    type="radio"
                                    name="role_name"
                                    id='teacher'
                                    value={'teacher'}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-5 ">Giáo viên</label>
                            </div>
                            <div id="role-3">
                                <input
                                    type="radio"
                                    name="role_name"
                                    id='admin'
                                    value={'admin'}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-5">Quản trị viên </label>
                            </div>
                        </div>
                        {formik.errors.role_name && <p className="help is-danger">{formik.errors.role_name}</p>}

                    </div>
                </div>
            </label>
            <div className="columns is-multiline">
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Họ và tên</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Họ và tên"
                            name="full_name"
                            id="full_name"
                            value={formik.values.full_name}
                            onChange={formik.handleChange} />
                        {formik.errors.full_name && <p className="help is-danger">{formik.errors.full_name}</p>}
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Ngày sinh</label>
                        <input
                            className="input"
                            type="date"
                            placeholder="Ngày sinh "
                            min="1900-01-01"
                            // max="2023-05-20"
                            max={currentDate}
                            pattern="\d{4}-\d{2}-\d{2}"
                            name="date_of_birth"
                            id='date_of_birth'
                            value={formik.values.date_of_birth}
                            onChange={formik.handleChange} />
                        {formik.errors.date_of_birth && <p className="help is-danger">{formik.errors.date_of_birth}</p>}

                    </div>
                </div>
                <div className="column is-6">
                    <div className="field gender-signup_form" >
                        <label className="label">Giới tính</label>
                        <div className="control" >
                            <div id="gender-1">
                                <input
                                    type="radio"
                                    name="gender"
                                    id='nam'
                                    value={"nam"}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-6" >Nam</label>
                            </div>
                            <div id="gender-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    id="nữ"
                                    value={"nữ"}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-6 ">Nữ</label>
                            </div>
                            <div id="gender-3">
                                <input
                                    type="radio"
                                    name="gender"
                                    id='khác'
                                    value={'khác'}
                                    onChange={formik.handleChange} />
                                <label className="radio is-size-6">Khác</label>
                            </div>
                        </div>
                        {formik.errors.gender && <p className="help is-danger">{formik.errors.gender}</p>}
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Địa chỉ</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Địa chỉ"
                            name="address"
                            id='address'
                            value={formik.values.address}
                            onChange={formik.handleChange} />
                        {formik.errors.address && <p className="help is-danger">{formik.errors.address}</p>}

                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Email</label>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            id='email'
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && <p className="help is-danger">{formik.errors.email}</p>}

                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Số điện thoại</label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Số điện thoại"
                            name="phone_number"
                            id='phone_number'
                            value={formik.values.phone_number}
                            onChange={formik.handleChange} />
                        {formik.errors.phone_number && <p className="help is-danger">{formik.errors.phone_number}</p>}

                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Mật khẩu </label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Mật khẩu"
                            name="password"
                            id='password'
                            value={formik.values.password}
                            onChange={formik.handleChange} />
                        {formik.errors.password && <p className="help is-danger">{formik.errors.password}</p>}
                    </div>
                </div>

                <div className="column is-6">
                    <div className="field">
                        <label className="label">Nhắc lại mật khẩu </label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Nhắc lại mật khẩu"
                            name="confirmPassword"
                            id='confirmPassword'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange} />
                        {formik.errors.confirmPassword && <p className="help is-danger">{formik.errors.confirmPassword}</p>}
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered" id='signup_button'>
                <button className="button is-link" type="submit" >Đăng kí</button>
            </div>
<ToastContainer/>
        </form >
    )
}
export default SignUpForm