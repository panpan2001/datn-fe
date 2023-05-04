import { Link, useNavigate } from "react-router-dom"
import '../../assets/styles/SignUpForm .css'
import { useState } from "react"
import registerUser from "../../redux/actions/Auth/RegisterRequest"
import { useDispatch } from "react-redux"
const SignUpForm = () => {
    const [role, setRole] = useState('')
    const [fullName, setFullName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleRegister = (e) => {
        console.log("newUser");
        e.preventDefault(e)
        const newUser = {
            role_name: role,
            full_name: fullName,
            date_of_birth: dateOfBirth,
            gender: gender,
            address: address,
            email: email,
            phone_number: phone,
            password: password,
        };
        console.table(newUser);
        registerUser(newUser, dispatch, navigate)
    }
    let date = new Date().toJSON();
    // console.log(date);
    let currentDate = new Date().toJSON().slice(0, 10);
    // console.log(currentDate);
    return (
        <form className='admin-signup-form_container container-fluid mr-6' onSubmit={handleRegister}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Đăng kí với vai trò là: </strong>
                <div className="column is-12 role-signup_column">
                    <div className="field role-signup_field">
                        <div className="control role-signup_control" id="role-signup_control">
                            <div id="role-1">
                                <input 
                                type="radio"
                                 name="role_radio-button" 
                                 value={'student'} 
                                 onChange={e => setRole(e.target.value)} />
                                <label className="radio is-size-5 " >Học viên</label>
                            </div>
                            <div id="role-2">
                                <input 
                                type="radio" 
                                name="role_radio-button" 
                                value={'teacher'} 
                                onChange={e => setRole(e.target.value)} />
                                <label className="radio is-size-5 ">Giáo viên</label>
                            </div>
                            <div id="role-3">
                                <input 
                                type="radio" 
                                name="role_radio-button" 
                                value={'admin'} 
                                onChange={e => setRole(e.target.value)} />
                                <label className="radio is-size-5">Quản trị viên </label>
                            </div>
                        </div>
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
                         onChange={e => setFullName(e.target.value)} />
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
                            onChange={e => setDateOfBirth(e.target.value)} />
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field gender-signup_form" >
                        <label className="label">Giới tính</label>
                        <div className="control" >
                            <div id="gender-1">
                                <input 
                                type="radio" 
                                name="gender_radio-button" 
                                value={"nam"} 
                                onChange={e => setGender(e.target.value)} />
                                <label className="radio is-size-6" >Nam</label>
                            </div>
                            <div id="gender-2">
                                <input 
                                type="radio" 
                                name="gender_radio-button" 
                                value={"nữ"} 
                                onChange={e => setGender(e.target.value)} />
                                <label className="radio is-size-6 ">Nữ</label>
                            </div>
                            <div id="gender-3">
                                <input 
                                type="radio" 
                                name="gender_radio-button" 
                                value={'khác'} 
                                onChange={e => setGender(e.target.value)} />
                                <label className="radio is-size-6">Khác</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Địa chỉ</label>
                        <input
                         className="input" 
                         type="text"
                          placeholder="Địa chỉ" 
                          onChange={e => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Email</label>
                        <input
                         className="input" 
                         type="email" 
                         placeholder="Email"
                         onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Số điện thoại</label>
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Số điện thoại" 
                        onChange={e => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Mật khẩu </label>
                        <input 
                        className="input"
                         type="text" 
                         placeholder="Mật khẩu"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="column is-6">
                    <div className="field">
                        <label className="label">Nhắc lại mật khẩu </label>
                        <input 
                        className="input"
                         type="text"
                          placeholder="Nhắc lại mật khẩu" 
                        onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered" id='signup_button'>
                <button className="button is-link" type="submit" >Đăng kí</button>
            </div>

        </form >
    )
}
export default SignUpForm