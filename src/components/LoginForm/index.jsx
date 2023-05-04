import '../../assets/styles/LoginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginUser from '../../redux/actions/Auth/LoginRequest'
import { useDispatch } from 'react-redux'
const LoginForm = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser={
            email:email,
            password:password
        };
        loginUser(newUser,dispatch,navigate)
    }

    return (
        <form className="login-form_container" onSubmit={handleSubmit}>
            <label className="label login-name_label is-size-3">
                <strong className='is-size-4'>Đăng nhập </strong>
            </label>
            <div className="field">
                <label className="label">Email</label>
                <input className="input" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <label className="label">Mật khẩu</label>
                <input className="input" type="password " placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" id='login_button'>
                <button className="button is-link" type="submit">Đăng nhập </button>
            </div>
            <label className="label sign-up_label ">
                <Link className=" is-size-6 mt-2 ">Quên mật khẩu?</Link>
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